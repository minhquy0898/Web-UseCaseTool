import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProject } from "../../api/database/UseCaseTool";
import { useAppDispatch } from "../../hooks/redux.hook";
import { PDFViewer, Document, Page, StyleSheet } from "@react-pdf/renderer";
import html2canvas from "html2canvas";

import {
  _useCasePointCurrentEcfSuccess,
  _useCasePointCurrentTcfSuccess,
  _useCasePointCurrentUawSuccess,
  _useCasePointCurrentUucpSuccess,
  _useCasePointEcfFectch,
  _useCasePointEcfSuccess,
  _useCasePointTcfFectch,
  _useCasePointUawFectch,
  _useCasePointUawSuccess,
  _useCasePointUucpFectch,
  _useCasePointUucpSuccess,
} from "../../redux/mainFuture";
import jsPDF from "jspdf";
import { Toast } from "../../utils/Toast";
const navBar = [
  {
    title: "UUCP",
    path: "/Tool",
  },
  {
    title: "Uaw",
    path: "/Tool/Uaw",
  },
  {
    title: "Tcf",
    path: "/Tool/Tcf",
  },
  {
    title: "Ecf",
    path: "/Tool/Ecf",
  },
  {
    title: "Result",
    path: "/Tool/Result",
  },
];
const Tool: React.FC = (props) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const dispatch = useAppDispatch();
  const [updata, setUpdata] = useState<boolean>(false);
  useEffect(() => {
    const getData = async () => {
      const Pid = localStorage.getItem("Pid");
      if (Pid) {
        setUpdata(true);
        const project = await getProject(Pid);
        console.log("--ssss--", project);
        // ------------UUCP--------------
        dispatch(
          _useCasePointUucpFectch({
            average: project?.Info?.UUCW?.Average,
            complex: project?.Info?.UUCW?.Complex,
            simple: project?.Info?.UUCW?.Simple,
          })
        );
        dispatch(
          _useCasePointCurrentUucpSuccess({
            uucp: {
              average: project?.Info?.UUCW?.Average,
              complex: project?.Info?.UUCW?.Complex,
              simple: project?.Info?.UUCW?.Simple,
            },
          })
        );
        // ---------UAW-------------
        dispatch(
          _useCasePointUawFectch({
            average: project?.Info?.UAW?.Average,
            complex: project?.Info?.UAW.Complex,
            simple: project?.Info?.UAW.Simple,
          })
        );
        dispatch(
          _useCasePointCurrentUawSuccess({
            uaw: {
              average: project?.Info?.UAW?.Average,
              complex: project?.Info?.UAW.Complex,
              simple: project?.Info?.UAW.Simple,
            },
          })
        );

        // ---------ECF-------------
        dispatch(
          _useCasePointEcfFectch({
            e1: project?.Info?.ECF?.FamiliarityWithDevelopmentProcessUsed,
            e2: project?.Info?.ECF?.ApplicationExperience,
            e3: project?.Info?.ECF?.ObjectOrientedExperienceOfTeam,
            e4: project?.Info?.ECF?.LeadAnalystCapability,
            e5: project?.Info?.ECF?.MotivationOfTheTeam,
            e6: project?.Info?.ECF?.StabilityOfRequirements,
            e7: project?.Info?.ECF?.PartTimeStaff,
            e8: project?.Info?.ECF?.DifficultProgrammingLanguage,
          })
        );
        dispatch(
          _useCasePointCurrentEcfSuccess({
            ecf: {
              e1: project?.Info?.ECF?.FamiliarityWithDevelopmentProcessUsed,
              e2: project?.Info?.ECF?.ApplicationExperience,
              e3: project?.Info?.ECF?.ObjectOrientedExperienceOfTeam,
              e4: project?.Info?.ECF?.LeadAnalystCapability,
              e5: project?.Info?.ECF?.MotivationOfTheTeam,
              e6: project?.Info?.ECF?.StabilityOfRequirements,
              e7: project?.Info?.ECF?.PartTimeStaff,
              e8: project?.Info?.ECF?.DifficultProgrammingLanguage,
            },
          })
        );
        // -------------TCF--------------
        // ---------ECF-------------
        dispatch(
          _useCasePointTcfFectch({
            t1: project?.Info?.TCF?.DistributedSystem,
            t2: project?.Info?.TCF?.ResponseTimePerformanceObjectives,
            t3: project?.Info?.TCF?.EndUserEfficiency,
            t4: project?.Info?.TCF?.InternalProcessingComplexity,
            t5: project?.Info?.TCF?.CodeReusability,
            t6: project?.Info?.TCF?.EasyToInstall,
            t7: project?.Info?.TCF?.EasyToUser,
            t8: project?.Info?.TCF?.PortabilityToOtherPlatforms,
            t9: project?.Info?.TCF?.SystemMaintenance,
            t10: project?.Info?.TCF?.ConcurrentParallelProcessing,
            t11: project?.Info?.TCF?.SecurityFeatures,
            t12: project?.Info?.TCF?.AccessForThirdParties,
            t13: project?.Info?.TCF?.EndUserTraining,
          })
        );
        dispatch(
          _useCasePointCurrentTcfSuccess({
            tcf: {
              t1: project?.Info?.TCF?.DistributedSystem,
              t2: project?.Info?.TCF?.ResponseTimePerformanceObjectives,
              t3: project?.Info?.TCF?.EndUserEfficiency,
              t4: project?.Info?.TCF?.InternalProcessingComplexity,
              t5: project?.Info?.TCF?.CodeReusability,
              t6: project?.Info?.TCF?.EasyToInstall,
              t7: project?.Info?.TCF?.EasyToUser,
              t8: project?.Info?.TCF?.PortabilityToOtherPlatforms,
              t9: project?.Info?.TCF?.SystemMaintenance,
              t10: project?.Info?.TCF?.ConcurrentParallelProcessing,
              t11: project?.Info?.TCF?.SecurityFeatures,
              t12: project?.Info?.TCF?.AccessForThirdParties,
              t13: project?.Info?.TCF?.EndUserTraining,
            },
          })
        );
      }
      localStorage.removeItem("Pid");
    };
    getData();
  }, []);
  // const createPDF = async () => {
  //   // TODO\
  //   const pdf = new jsPDF("portrait", "pt", "a4");
  //   const data = await html2canvas(document.querySelector("#pdf") as any);
  //   const img = data.toDataURL("image/png");
  //   const imgProperties = pdf.getImageProperties(img);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  //   pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   pdf.save("shipping_label.pdf");
  // };
  const saveToPdf = async () => {
    const saveToPdf = document.querySelector("#pdf") as HTMLElement; // the element you want to save
    const doc = new jsPDF({
      // the pdf file
      orientation: "p",
      unit: "mm",
      format: "a3",
      putOnlyUsedFonts: true,
    });
    let mmHeight = 0;
    let mmWidth = 0;

    const canvas = await html2canvas(saveToPdf); // generate canvas from element
    mmHeight = canvas.height * 0.2645833333; // getting canvas height and width in millimeters
    mmWidth = canvas.width * 0.2645833333;

    // prevent an image from going out of bound of the pdf document
    if (mmWidth > 297)
      // mmWidth compared to width of A3 document in millimeters
      mmWidth = 297;
    if (mmHeight > 420) mmHeight = 420;

    const image = canvas.toDataURL("image/png", 1.0); // generate data url
    doc.addImage(
      image,
      "png",
      0,
      0,
      mmWidth,
      mmHeight,
      undefined,
      undefined,
      undefined
    ); // add an image to pdf document with specified width and height
    doc.save("test"); // save the document with given name
    Toast.ToastSuccess({
      Success: "Export PDF complete",
    });
  };

  return (
    <div className="Tool">
      <div className="Tool__navication">
        {navBar &&
          navBar.map((item, index) => {
            return (
              <Link
                key={`nav__${index}`}
                className={`Tool__navication__item ${
                  item.path == pathname ? "active" : ""
                }`}
                to={`${item.path}`}
              >
                {item.title}
              </Link>
            );
          })}
        <div className="Tool__box">
          <div className="Tool__item">
            <button
              onClick={() => saveToPdf()}
              className={`Tool__navication__item `}
            >
              Import Excel
            </button>
          </div>
          {pathname == "/Tool/Result" ? (
            <div className="Tool__warpper">
              <div className="Tool__item">
                <button
                  onClick={() => saveToPdf()}
                  className={`Tool__navication__item `}
                >
                  Export excel
                </button>
              </div>
              <div className="Tool__item">
                <button
                  onClick={() => saveToPdf()}
                  className={`Tool__navication__item `}
                >
                  Export PDF
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="Tool__outlet" id="pdf">
        <Outlet />
      </div>
    </div>
  );
};

Tool.propTypes = {};

export default Tool;

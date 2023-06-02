import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'

const useTheme = () => {
    const [theme, setTheme] = useState<string|null>(null);
    const handleInitTheme = ()=>{
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
        localStorage.setItem('theme', "dark")
      }
      else {
        setTheme('light');
        localStorage.setItem('theme', "light")
      }
    }
    
    useEffect(()=>{
      const getTheme = async () => {
        const initTheme = localStorage.getItem('theme');
        console.log(initTheme)
        if (!initTheme) {
          await handleInitTheme();
        } else {
          setTheme(initTheme);
        }
      };
      getTheme();
    },[])
  
    
  
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      const initTheme =  theme === "dark" ? "light" : "dark"
      setTheme(initTheme);
      localStorage.setItem('theme', initTheme)
    };
    return {
        theme,
        handleThemeSwitch
    }
}



export default useTheme
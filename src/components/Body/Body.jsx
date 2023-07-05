import React, { useEffect, useState } from 'react'
import styles from "../Body/Body.module.css"
import { Download } from 'react-feather';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';
const Body = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea" , "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo :"Basic Info",
        workExp:"Work Experience",
        project :"Projects",
        education :"Education",
        achievement:"Achievements",
        summary :"Summary",
        other :"Others"
    }
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo] : {
            id:sections.basicInfo,
            sectionTitle:sections.basicInfo,
            detail :{}
        },
        [sections.workExp] :{
            id:sections.workExp,
            sectionTitle:sections.workExp,
            details:[],
        },
        [sections.project]:{
            id:sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education] :{
            id:sections.education,
            sectionTitle: sections.education,
            details:[]
        },
        [sections.achievement] :{
            id:sections.achievement,
            sectionTitle :sections.achievement,
            points: [],
        },
        [sections.summary] :{
            id: sections.summary,
            sectionTitle:sections.summary,
            detail: ""
        },
        [sections.other]:{
            id: sections.other,
            sectionTitle:sections.other,
            detail:""
        }
    });

    useEffect(()=>{
        console.log(resumeInformation);
    },[resumeInformation])


  return (
    <div>
        <div className={styles.container}>
            <p className={styles.heading}>Resume Builder</p>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {colors.map((item)=>(
                        <span 
                        className={styles.color}
                        key={item}
                        style={{backgroundColor:item}}
                        />
                ))}
                    </div>
                <button>Download <Download/></button>
            </div>
            <div className={styles.main}>
                    <Editor sections={sections} information = {resumeInformation} setInformation={setResumeInformation}/>
                    <Resume/>
            </div>
        </div>
    </div>
  )
}

export default Body

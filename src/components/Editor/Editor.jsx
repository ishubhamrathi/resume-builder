import React, { useEffect, useState } from 'react'
import styles from "./Editor.module.css"
import InputControl from '../InputControl/InputControl';
import { X } from 'react-feather';

const Editor = (props) => {
  const sections = props.sections;
  const information = props.information;
  const [activeSectionKey, setActiveActionKey] = useState(Object.keys(sections)[0]);
  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);
  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });
  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if(!Array.isArray(tempValues.points)) tempValues.points=[];
    tempValues.points[index] = value;
    setValues(tempValues)
  }
  const basicInfo = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="ENter your full name eg.Ashu"
          value={values.name}
          onChange={(e) => setValues(prev => ({ ...prev, name: e.target.value }))}
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg.Frontend Developer"
          value={values.title}
          onChange={(e) => setValues(prev => ({ ...prev, title: e.target.value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your Linkedin Profile Link"
          value={values.linkedin}
          onChange={(e) => setValues(prev => ({ ...prev, linkedin: e.target.value }))}
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your github link"
          value={values.github}
          onChange={(e) => setValues(prev => ({ ...prev, github: e.target.value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          placeholder="Enter your email"
          value={values.email}
          onChange={(e) => setValues(prev => ({ ...prev, email: e.target.value }))}
        />
        <InputControl
          label="Enter Phone"
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={(e) => setValues(prev => ({ ...prev, phone: e.target.value }))}
        />
      </div>
    </div>
  );
  const workExpBody = (
    <div className={styles.details}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend Developer"
          value={values.title}
          onChange={(e) => setValues(prev => ({ ...prev, title: e.target.value }))}
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          value={values.companyName}
          onChange={(e) => setValues(prev => ({ ...prev, companyName: e.target.value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certification Link"
          placeholder="Enter certification link"
          value={values.certificationLink}
          onChange={(e) => setValues(prev => ({ ...prev, certificationLink: e.target.value }))}
        />
        <InputControl
          label="Locaion"
          placeholder="Enter location eg.Remote"
          value={values.location}
          onChange={(e) => setValues(prev => ({ ...prev, location: e.target.value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(e) => setValues(prev => ({ ...prev, startDate: e.target.value }))}
        />

        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={values.endDate}
          onChange={(e) => setValues(prev => ({ ...prev, endDate: e.target.value }))}
        />
      </div>
      <div className={styles.column}>
        <label>Enter Work Description</label>
        <InputControl placeholder="Line1" value={values.points ? values.point[0] : ""} onChange={(e) => handlePointUpdate(e.target.value, 0)} />
        <InputControl placeholder="Line2" value={values.points ? values.point[1] : ""} onChange={(e) => handlePointUpdate(e.target.value, 1)} />
        <InputControl placeholder="Line3" value={values.points ? values.point[2] : ""} onChange={(e) => handlePointUpdate(e.target.value, 2)} />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Chat App"
          value={values.title}
          onChange={(e) => setValues(prev => ({ ...prev, title: e.target.value }))}
        />
        <InputControl
          label="Overview"
          placeholder="Write"
          value={values.overview}
          onChange={(e) => setValues(prev => ({ ...prev, overview: e.target.value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          value={values.link}
          placeholder="Enter deployed link of project"
          onChange={(e) => setValues(prev => ({ ...prev, link: e.target.value }))}
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
          value={values.github}
          onChange={(e) => setValues(prev => ({ ...prev, github: e.target.value }))}
        />
      </div>
      <div className={styles.column}>
        <label>Enter Work Description</label>
        <InputControl placeholder="Line1" value={values.points ? values.point[0] : ""} onChange={(e) => handlePointUpdate(e.target.value, 0)} />
        <InputControl placeholder="Line2" value={values.points ? values.point[1] : ""} onChange={(e) => handlePointUpdate(e.target.value, 1)} />
        <InputControl placeholder="Line3" value={values.points ? values.point[2] : ""} onChange={(e) => handlePointUpdate(e.target.value, 2)} />
        <InputControl placeholder="Line4" value={values.points ? values.point[3] : ""} onChange={(e) => handlePointUpdate(e.target.value, 3)} />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg. B-tech" value={values.title} />
        <InputControl label="College/School Name" placeholder="Enter name of your college/School" value={values.college} />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter Start date of this education"
          value={values.startDate}
          onChange={(e) => setValues(prev => ({ ...prev, startDate: e.target.value }))}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={values.endDate}
          onChange={(e) => setValues(prev => ({ ...prev, endDate: e.target.value }))}
        />

      </div>
    </div>
  );


  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl placeholder="Line1" value={values.points ? values.point[0] : ""} onChange={(e) => handlePointUpdate(e.target.value, 0)} />
        <InputControl placeholder="Line2" value={values.points ? values.point[1] : ""} onChange={(e) => handlePointUpdate(e.target.value, 1)} />
        <InputControl placeholder="Line3" value={values.points ? values.point[2] : ""} onChange={(e) => handlePointUpdate(e.target.value, 2)} />
        <InputControl placeholder="Line4" value={values.points ? values.point[3] : ""} onChange={(e) => handlePointUpdate(e.target.value, 3)} />
      </div>
    </div>
  );
  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
        value={values.summary}
        onChange={(e) => setValues(prev => ({ ...prev, summary: e.target.value }))}
      />
    </div>
  );

  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        label="Others"
        placeholder="Addtional Details"
        value={values.other}
        onChange={(e) => setValues(prev => ({ ...prev, other: e.target.value }))}
      />
    </div>
  )
  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: return basicInfo;
      case sections.workExp: return workExpBody;
      case sections.project: return projectBody;
      case sections.education: return educationBody;
      case sections.achievement: return achievementsBody;
      case sections.summary: return summaryBody;
      case sections.other: return otherBody;
      default: return null;
    }
  }
  const handleSubmission = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        {
          const tempDetail = {
            name: values.name,
            title: values.title,
            linkedin: values.linkedin,
            github: values.github,
            email: values.email,
            phone: values.phone,
          }
          props.setInformation(prev => ({
            ...prev,
            [sections.basicInfo]: {
              ...prev[sections.basicInfo],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.workExp:
        {
          const tempDetail = {
            certificationLink: values.certificationLink,
            title: values.title,
            startDate: values.startDate,
            companyName: values.companyName,
            location: values.location,
            points: values.points,
          }
          const tempDetails = [...information[sections.workExp]?.details];
          tempDetails[activeDetailIndex]=tempDetail;

          props.setInformation(prev => ({
            ...prev,
            [sections.workExp]: {
              ...prev[sections.workExp],
              detail: tempDetail,
              sectionTitle
            },
          }
          
          ));
          break;
        }
        case sections.project:
        {
          const tempDetail = {
            link: values.link,
            title: values.title,
            overview: values.overview,
            github: values.github,
            phone: values.phone,
          }
          const tempDetails=[...information[sections.project]?.details];
          tempDetails[activeDetailIndex]=tempDetail;
          
          props.setInformation(prev => ({
            ...prev,
            [sections.project]: {
              ...prev[sections.project],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.education:
        {
          const tempDetail = {
            title: values.title,
            college: values.college,
            startDate: values.startDate,
            endDate: values.endDate,
          }
          const tempDetails=[...information[sections.education]?.details];
          tempDetails[activeDetailIndex]=tempDetail;
          
          props.setInformation(prev => ({
            ...prev,
            [sections.education]: {
              ...prev[sections.education],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.achievement:
        {
          const tempPoints = values.points
          props.setInformation(prev => ({
            ...prev,
            [sections.achievement]: {
              ...prev[sections.achievement],
              points:tempPoints,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.summary:
        {
          const tempPoints = values.point
          props.setInformation(prev => ({
            ...prev,
            [sections.summary]: {
              ...prev[sections.summary],
              detail: tempPoints,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.other : 
        {
          const tempPoints = values.point
          props.setInformation(prev => ({
            ...prev,
            [sections.other]: {
              ...prev[sections.other],
              detail: tempPoints,
              sectionTitle,
            },
          }));
          break;
        }
        
        

    }
  }
  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]]
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details
        ? activeInfo.details[0]?.college || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
          ? [...activeInfo.points]
          : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });
  }, [activeSectionKey])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${activeSectionKey === key ? styles.active : ""}`}
            key={key}
            onClick={() => setActiveActionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl label="Title" placeholder="Enter section title" value={sectionTitle} onChange={(event) => setSectionTitle(event.target.value)} />

        <div className={styles.chips}>
          {
            activeInformation?.details ? activeInformation.details.map((item, index) => (
              <div className={`${styles.chip} ${activeDetailIndex===index?styles.active : ""}`} key={item.title + index} onClick={()=>setActiveDetailIndex(index)}>
                <p>{sections[activeSectionKey]} {index + 1}</p><X />
              </div>
            )) : ""
          }
        </div>
        {generateBody()}
        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  )
}
export default Editor
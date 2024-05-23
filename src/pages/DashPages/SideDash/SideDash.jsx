import styles from './Sidedash.module.css'
import arr from '../../../assets/arr.png'
import dashboardhero from '../../../assets/dashboardhero.svg'
import{ Button } from '../../../components/Button/Button'
import heroarrowright from '../../../assets/heroarrowright.svg'
import videoicon from '../../../assets/videoicon.svg'
import { Link } from 'react-router-dom'
import { DashSubject, DashChallenges, progressData } from '../../../utils/Dashboard'

const SideDash = () => {

    const getCurrentGreeting = () => {
    const now = new Date();
    const hours = now.getHours();

      if (hours >= 0 && hours < 12) {
        return "Morning";
      } else if (hours >= 12 && hours < 18) {
        return "Afternoon";
      } else {
        return "Evening";
      }
    }
    const Greeting = getCurrentGreeting();

  return (

    <>
      <div className={styles.container}>

        <p className={styles.greeting}>{Greeting}, Chujac 👋😁</p>

        <section className={styles.hero_section}>
            <div className={styles.hero_left}>            
                <div className={styles['dashboard-hero-txt']}>
                  <div className={styles['dashboard-hero-first-text-cont']}>
                    <p className={styles['dashboard-hero-first-text']}>Today’s Subject <img src={arr} alt="arrow"/> English Hero</p>
                    <p className={styles.lesson}>Lesson- Phonics Module 1-6</p>
                  </div>
                  <p style={{fontFamily: 'Actor'}}>Start the basics of English by learning the 9 parts of speech </p>

                  <Button className={styles.hero_btn} content="Get Started" link="/Subjects" />               
                </div>

                <div className={styles['dashboard-hero-img']}>
                <img src={dashboardhero} alt="Dash Board Hero Image" />
                </div>
            </div>

            <div className={styles.hero_right}>
                <section className={styles.recent_txt}>
                  <p className={styles.recently}>Recently</p>
                  <Link>
                    <p className={styles.recent_txt_right}>View more <img src={heroarrowright} alt="" /></p>
                  </Link>
                </section>

                <section className={styles.recent_cards}>
                  <div className={styles.recent_card}>
                    <img src={videoicon} alt="Video Icon" />
                    <div>
                      <p className={styles.phonics}>Phonics Lesson 2</p>
                      <p className={styles.phonics_desc}>English Hero</p>
                    </div>
                  </div>

                  <div className={styles.recent_card}>
                      <img src={videoicon} alt="Video Icon" />
                      <div>
                        <p className={styles.phonics}>Draw a triangle</p>
                        <p className={styles.phonics_desc}>Challenges</p>
                      </div>
                  </div>
              </section>
            </div>
          </section>

{/* --------------------------------------Main Section--------------------------------------------- */}

          <main className={styles.main_section}>
            
            <div className={styles['main-header-container']}>
                  <p className={styles.course_section}>Courses</p>
                  <div>
                    <p className={styles.progress_section_txt}>Achievements</p>
                    <p className={styles.recent_txt_right}>view all <img src={heroarrowright} alt="Arrow"/></p>
                  </div>   
            </div>

            <section className={styles.main_content}>

              <section className={styles.main_left_section}>
                    <div className={styles.subject}>
                      <p className={styles.subject_title}>Subjects</p>
                      <p className={styles.view_more}>View more <img src={heroarrowright} alt="View More" /></p>
                    </div>

                    <div className={styles.subject_container}>
                      <div className={styles.subject_card}>
                        {DashSubject.map(subject => (
                          <div key={subject.id}>
                            <img src={subject.imgURL} alt={subject.subjectTitle} className={styles.subject_img}/>
                            <div className={styles.subject_body}>
                                <p>{subject.subjectTitle}</p>
                                <button>Start for free</button>
                            </div>
                            <p className={styles.subject_description}>{subject.subjectDescription}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                          {/* ------- */}

                    <div className={styles.challenge}>
                      <p className={styles.subject_title}>Challenges</p>
                      <p className={styles.view_more}>View more <img src={heroarrowright} alt="View More" /></p>
                    </div>

                    <div className={styles.challenge_container}>
                      <div className={styles.challenge_card}>
                        {DashChallenges.map(challenge => (
                          <div key={challenge.id}>
                            <img src={challenge.imgURL} alt={challenge.shapes} className={styles.challenge_img}/>
                            <div className={styles.challenge_body}>
                                <p className={styles.challenge_cap}>{challenge.challengecap}</p>
                                <p className={styles.rating}>{challenge.rating}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
              </section>

              <section className={styles.main_right_section}>
                
              </section>

            </section>             
          </main>
 
      </div>
    </>
  );
};

export default SideDash;

import React from 'react';
import UpdatingSite from '../../../../Component/Utilities/UpdateingSite/UpdatingSite';
import EducationCard from './EducationCard/EducationCard';

const Educations = () => {

    const educationalQualifications = [
        {
            _id: "001",
            image: "https://tgco.edu.bd/wp-content/uploads/2022/11/college.jpg",
            institute: "Tongi Govt College",
            university: "National University",
            program: "Preliminary to Master’s   ",
            academicYear: "(2019-2020)",
            subject: "Management",
            courseDuration: "02 Years",
            websiteLink: "https://tgco.edu.bd/",
            paragraph: "I am currently studying management subject for the academic year 2019 to 2020 in Preliminary to Masters program from Tongi Government College National University. Located in the heart of the industrial city of Tongi in Gazipur district, IT-rich Tongi Government College is a reputed modern Educational institutions. During the visit of Father of the Nation Bangabandhu Sheikh Mujibur Rahman to Tangail, the then Member of Parliament Kazi Mozammel Haque, along with local Awami League leaders and academics met Bangabandhu and got his verbal consent. He founded the collection in 1972. Raised to degree level in 1986, the college was nationalized in 1988. In 1996 Honorable Member of Gazipur-2 Constituency, Shahid Ahsan Ullah Master, Honors in 8 Subjects And Masters course started. Subsequently, with the efforts of Honorable Member of Parliament, Md. Zahid Ahsan Russel, in 5 other matters Hons., Masters in 3 subjects, FLTC and two ICT labs opened. The college provides higher education to the poor community of the region One of the best companies for profit."
        },
        {
            _id: "002",
            image: "https://www.toursian.com/uploads/place/311/1621699526.jpg",
            institute: "Pakutia B.C.R.G Degree College",
            university: "National University",
            program: "Bachelor of Business Studies   ",
            academicYear: "(2016-2019)",
            subject: "Business Studies",
            courseDuration: "03 Years",
            websiteLink: "https://www.facebook.com/PakutiaBCRGDegreeCollege/",
            paragraph: "My academic year was 2016 to 2019. I have spent the most important time of my educational life in this university. It is under National University. I obtained my degree in Bachelor of Business Studies program from this university. Pakutia B.C.R.G Degree College is an educational establishment that is located at Pakutia, Pakutia, Nagarpur, Tangail. Its Educational Institute Identification Number of EIIN, is 114589. On 01 July, 1967, it was first put into operation. The alternative name for Pakutia BCRG Degree College is পাকুটিয়া বি.সি.আর.জি ডিগ্রী কলেজ. The institution provides education in the following fields: Humanities, Business Studies, Science. Its MPO number is 4209013201. "
        },
        {
            _id: "003",
            image: "https://www.toursian.com/uploads/place/311/1621699526.jpg",
            institute: "Pakutia B.C.R.G Degree College",
            university: "National University",
            program: "Higher Secondary School (HSC)   ",
            academicYear: "(2013-2016)",
            subject: "Business Studies",
            courseDuration: "02 Years",
            websiteLink: "https://www.facebook.com/PakutiaBCRGDegreeCollege/",
            paragraph: "My academic year was 2013 to 2015.But due to some personal reasons, giving a gap year took a total of three years. I have spent the most important time of my educational life in this university. It is under National University. I obtained my degree in Bachelor of Business Studies program from this university. Pakutia B.C.R.G Degree College is an educational establishment that is located at Pakutia, Pakutia, Nagarpur, Tangail. Its Educational Institute Identification Number of EIIN, is 114589. On 01 July, 1967, it was first put into operation. The alternative name for Pakutia BCRG Degree College is পাকুটিয়া বি.সি.আর.জি ডিগ্রী কলেজ. The institution provides education in the following fields: Humanities, Business Studies, Science. Its MPO number is 4209013201. "
        },
        {
            _id: "004",
            image: "https://scontent.fdac142-1.fna.fbcdn.net/v/t39.30808-6/310442710_514588917341883_2534153386413507452_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGz--iSGw-ZqvXxUU6mXr0tR0PRhJfgR71HQ9GEl-BHvSIXF-hL73JyEOmSNkJJfaBVJHA6buRsTDKgPc7nyguK&_nc_ohc=HiExr9aETg8AX-qkCxl&tn=VQSTknjl4P5dQhG_&_nc_ht=scontent.fdac142-1.fna&oh=00_AfCyDGYEVsl4i51wHe9-WN9A-hpkhi8NxPuqrX6ClkGYFw&oe=63A1D8F6",
            institute: "Atia Mamudpur High School",
            university: "Dhaka board",
            program: "Secondary School Certificate (HSC)   ",
            academicYear: "(2008-2013)",
            subject: "Business Studies",
            courseDuration: "05 Years",
            websiteLink: "https://deb114489.dhakaeducationboard.gov.bd/index.php/content/index/14",
            paragraph: "Every moment spent in this school during my educational life was very lively. My childhood memories revolve around this school. In 2013, I participated in SSC examination of Dhaka Board from Atiya Mamudpur High School and passed. I was studying business education.This school is located in Atia Mamudpur village of Anaitara union of Mirzapur upazila of Tangail district."
        },
    ]
    return (
        <div>
            <div className='my-12'>
                <h3 className='text-5xl text-info font-semibold text-center'>My Educational Background and Institute</h3>
            </div>
            <div className='my-16'>
                {
                    educationalQualifications &&
                    educationalQualifications.map(educationalQualification => <EducationCard
                        key={educationalQualification._id}
                        educationalQualification={educationalQualification}
                    >

                    </EducationCard>)
                }
            </div>

            {/* <EducationCard></EducationCard> */}
        </div>
    );
};

export default Educations;
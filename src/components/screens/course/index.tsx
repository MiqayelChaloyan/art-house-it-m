'use client'

import About from './About';
import OurDay from './OurDay';
import VideoPlayer from './VideoPlayer';

interface Props {
    data: COURSES_QUERYResult;
};

const Course = ({ data }: Readonly<Props>) => {
    const { course_name, course_image, about_course, our_day, video } = data;

    return (
        <>
            <About
                course={course_name}
                image={course_image}
                about_course={about_course}
            />
            <OurDay our_day={our_day} />
            <VideoPlayer video={video} />
        </>
    )
};

export default Course;
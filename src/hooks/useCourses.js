
import { useState } from 'react';
import { useEffect } from 'react';

const useCourses = () => {
    // custom Hooks
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courseInfo.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return [courses]
};

export default useCourses;
const projectsArray = [
    {
        "image": "image/movie.jpg",
        "title": "Movie Site",
        "date": "Ongoing",
        "tech": "HTML, CSS, JavaScript, Node.js, Mongo DB",
        "description": "Develop an ongoing Movie Site, catering to the passion of movie enthusiasts. The platform allows users to effortlessly search for movies by name, explore comprehensive information, and enjoy a seamless and interactive experience. Leveraging HTML, CSS, JavaScript, Node.js, and MongoDB, this project showcases my dedication to delivering a feature-rich and user-centered web application."
    },
    {
        "image": "image/web.jpg",
        "title": "Personal Website",
        "date": "Nov. 5, 2023",
        "tech": "HTML, CSS, JavaScript",
        "description": "Developing a visually appealing web page using a combination of HTML, CSS, and JavaScript to effectively showcase my personal education, work experience, and skills. This online platform offers an engaging and informative experience for visitors, providing them with a comprehensive view of my qualifications and achievements." 
    },
    {
        "image": "image/db.jpg",
        "title": "Tool Management Database",
        "date": "Oct. 22, 2023",
        "tech": "Microsoft SQL Server Management System, Microsoft Access",
        "description": "Developing a Tool Rental Management Application with a structured database to track tool types, customer details, orders, and financial data for effective business management."
    },
    {
        "image": "image/calculator.jpg",
        "title": "Calculator",
        "date": "Aug. 28, 2023",
        "tech": "HTML, CSS, JavaScript",
        "description": "Apply my web development skills and build a practical and useful web application."
    }
    
];

window.onload = function () {
    let currentIndex = 0;
    function updateProjectInfo(index) {
        const project = projectsArray[index];
        document.getElementById("pImg").src = project.image;
        document.getElementById("pTitle").textContent = project.title;
        document.getElementById("pDate").textContent = project.date;
        document.getElementById("pTech").textContent = project.tech;
        document.getElementById("pDescription").textContent = project.description;
    }

    document.getElementById("nextBtn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % projectsArray.length;
        updateProjectInfo(currentIndex);
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + projectsArray.length) % projectsArray.length;
        updateProjectInfo(currentIndex);
    });

    updateProjectInfo(currentIndex);

};

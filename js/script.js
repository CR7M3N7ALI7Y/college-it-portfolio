// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация меню навигации
    initNavigation();
    
    // Инициализация скролла
    initScrollEffects();
    
    // Загрузка данных команды
    loadTeamMembers();
    
    // Загрузка проектов
    loadProjects();
    
    // Инициализация плавной прокрутки
    initSmoothScrolling();
    
    // Инициализация формы контактов
    initContactForm();
    
    // Инициализация анимаций
    initAnimations();
});

// Навигация
function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
        
        // Закрытие меню при клике на ссылку
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
                
                // Установка активного класса
                navLinksItems.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // Изменение header при скролле
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Подсветка активного раздела
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
}

// Эффекты при скролле
function initScrollEffects() {
    const elements = document.querySelectorAll('.lead-member, .team-member, .project-card, .skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px) scale(0.95)';
        element.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(element);
    });
}

// Загрузка данных команды
function loadTeamMembers() {
    const teamGrid = document.getElementById('teamMembers');
    
    if (!teamGrid) return;
    
    // Расширенный список команды
    const teamMembers = [
        {
            id: 1,
            name: "Екатерина Волкова",
            role: "UI/UX Дизайнер",
            skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Prototyping"],
            avatar: "ЕВ",
            category: "design",
            color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        {
            id: 2,
            name: "Дмитрий Соколов",
            role: "React Developer",
            skills: ["React", "Redux", "TypeScript", "Next.js", "Styled Components"],
            avatar: "ДС",
            category: "frontend",
            color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        {
            id: 3,
            name: "Ольга Новикова",
            role: "Python Developer",
            skills: ["Python", "Django", "Flask", "PostgreSQL", "Docker"],
            avatar: "ОН",
            category: "backend",
            color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            id: 4,
            name: "Михаил Кузнецов",
            role: "Mobile Developer",
            skills: ["React Native", "Flutter", "Firebase", "iOS", "Android"],
            avatar: "МК",
            category: "fullstack",
            color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        },
        {
            id: 5,
            name: "Анастасия Попова",
            role: "QA Engineer",
            skills: ["Testing", "Cypress", "Jest", "Selenium", "CI/CD"],
            avatar: "АП",
            category: "backend",
            color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        },
        {
            id: 6,
            name: "Артем Лебедев",
            role: "DevOps Engineer",
            skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Linux"],
            avatar: "АЛ",
            category: "backend",
            color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
        },
        {
            id: 7,
            name: "Виктория Крылова",
            role: "Frontend Developer",
            skills: ["Vue.js", "Nuxt.js", "Vuex", "SCSS", "Webpack"],
            avatar: "ВК",
            category: "frontend",
            color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
        },
        {
            id: 8,
            name: "Роман Морозов",
            role: "Backend Developer",
            skills: ["Node.js", "Express", "MongoDB", "Redis", "GraphQL"],
            avatar: "РМ",
            category: "backend",
            color: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)"
        },
        {
            id: 9,
            name: "Юлия Захарова",
            role: "Fullstack Developer",
            skills: ["Angular", "NestJS", "TypeScript", "MySQL", "AWS"],
            avatar: "ЮЗ",
            category: "fullstack",
            color: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)"
        }
    ];
    
    teamMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'team-member';
        memberElement.setAttribute('data-category', member.category);
        memberElement.innerHTML = `
            <div class="member-avatar" style="background: ${member.color};">
                ${member.avatar}
            </div>
            <h3 class="member-name">${member.name}</h3>
            <p class="member-role">${member.role}</p>
            <div class="member-skills">
                ${member.skills.map(skill => `<span>${skill}</span>`).join('')}
            </div>
        `;
        teamGrid.appendChild(memberElement);
    });
    
    // Инициализация фильтрации
    initTeamFilter();
}

// Функция для фильтрации команды
function initTeamFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const teamMembers = document.querySelectorAll('.team-member, .lead-member');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Фильтруем участников команды
            teamMembers.forEach(member => {
                const memberRole = member.getAttribute('data-role') || 
                                   member.getAttribute('data-category');
                
                if (filterValue === 'all' || memberRole === filterValue) {
                    member.style.display = 'block';
                    setTimeout(() => {
                        member.style.opacity = '1';
                        member.style.transform = 'translateY(0) scale(1)';
                    }, 100);
                } else {
                    member.style.opacity = '0';
                    member.style.transform = 'translateY(20px) scale(0.95)';
                    setTimeout(() => {
                        member.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Загрузка проектов
function loadProjects() {
    const projectList = document.getElementById('projectList');
    
    if (!projectList) return;
    
    const projects = [
        {
            id: 1,
            title: "Система управления курсами",
            description: "Веб-платформа для создания и управления образовательными курсами с поддержкой видео-лекций, тестов и домашних заданий.",
            tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
            icon: "fas fa-graduation-cap"
        },
        {
            id: 2,
            title: "Мобильное приложение расписания",
            description: "Приложение для студентов с уведомлениями об изменениях в расписании и интеграцией с календарем.",
            tech: ["React Native", "Firebase", "Redux", "Push Notifications"],
            icon: "fas fa-calendar-alt"
        },
        {
            id: 3,
            title: "Портал IT-новостей колледжа",
            description: "Агрегатор новостей и событий IT-отдела с системой комментариев и рейтингов.",
            tech: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis"],
            icon: "fas fa-newspaper"
        },
        {
            id: 4,
            title: "Библиотека компонентов UI",
            description: "Кастомизируемая библиотека React компонентов для быстрой разработ
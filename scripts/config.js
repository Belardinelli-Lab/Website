// Website Configuration
// This file contains easily configurable settings for the Brain Plasticity Lab website

const config = {
    // Lab Information
    lab: {
        name: "Brain Plasticity Laboratory",
        institution: "CIMeC - University of Trento",
        description: "Understanding brain responses and modulating plasticity mechanisms through state-dependent stimulation",
        website: "https://www.cimec.unitn.it/node/1593"
    },
    
    // Contact Information
    contact: {
        email: "Paolo.belardinelli@unitn.it",
        address: "CIMeC - University of Trento, Italy"
    },
    
    // Team Members
    team: [
        {
            name: "Paolo Belardinelli",
            position: "Principal Investigator",
            description: "Leading research in brain state-dependent stimulation and neuroplasticity mechanisms.",
            photo: "Pictures/Team members/Paolo Belardinelli.jpeg",
            hasPhoto: true
        },
        {
            name: "Melissa Null",
            position: "PhD Candidate",
            description: "Investigating brain plasticity mechanisms and real-time stimulation protocols.",
            photo: "",
            hasPhoto: false
        },
        {
            name: "Jacopo Schenetti",
            position: "Research Assistant",
            description: "Supporting research activities in brain stimulation and data analysis.",
            photo: "",
            hasPhoto: false
        },
        {
            name: "Chiara Giannina Leu",
            position: "Post-Doctoral Researcher",
            description: "Conducting advanced research in neuroplasticity and brain stimulation techniques.",
            photo: "",
            hasPhoto: false
        },
        {
            name: "Elena Mongiardini",
            position: "Phd in Bioengineering",
            description: "Contributing to research projects and gaining experience in neuroscience methods.",
            photo: "",
            hasPhoto: false
        },
    
        {
            name: "Martina Cavalli",
            position: "Intern",
            description: "Supporting laboratory activities and learning advanced neuroscience techniques.",
            photo: "",
            hasPhoto: false
        }
    ],
    
    // Research Areas
    research: [
        {
            title: "Non-invasive Real-Time Brain State Dependent Stimulation",
            description: "Developing advanced techniques for real-time brain state detection and targeted stimulation protocols.",
            icon: "fas fa-brain"
        },
        {
            title: "Brain Plasticity Mechanisms with a Focus on Stroke",
            description: "Investigating neuroplasticity mechanisms and their therapeutic potential for stroke rehabilitation.",
            icon: "fas fa-sync-alt"
        },
        {
            title: "Anatomical and Functional Correlates of Aging",
            description: "Exploring how aging affects brain structure and function, and developing interventions to maintain cognitive health.",
            icon: "fas fa-user-clock"
        }
    ],
    
    // Collaborations
    collaborations: [
        {
            name: "Ulf Ziemann",
            position: "Head of Department of Neurology",
            institution: "University Clinics of Tuebingen, Germany"
        },
        {
            name: "Christoph Zrenner",
            position: "Department of Psychiatry",
            institution: "University of Toronto, Toronto, ON, Canada"
        },
        {
            name: "Giulia Liberati",
            position: "Institute of Neuroscience - IoNS",
            institution: "Université Catholique de Louvain"
        }
    ],
    
    // Grants
    grants: [
        {
            name: "Connect2Brain",
            period: "2018-2024",
            investigators: "Risto Ilmoniemi, Ulf Ziemann, Gianluca Romani"
        }
    ],
    
    // Social Media (for future use)
    social: {
        twitter: "",
        linkedin: "",
        researchgate: "",
        orcid: ""
    },
    
    // Website Settings
    settings: {
        showLoadingAnimation: true,
        enableParallax: true,
        enableSmoothScrolling: true,
        showScrollToTop: true,
        googleAnalyticsId: "" // Add GA ID when available
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}
import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      info: {
        fullName: 'Ajdin Lojić',
        description: 'Web developer',
        cell: '+38761811375',
        git: 'https://github.com/ajdinl',
        website: 'https://ajdinlojic.netlify.app/',
        email: 'ajdinl@live.com',
        linkedin: '@ajdinlojic',
        linkedinLink: 'https://www.linkedin.com/in/ajdin-lojic/',
        address: 'Bosnia and Herzegovina, Sarajevo',
      },
      personal: {
        profile:
          'I am a web developer with robust problem-solving skills. Self-taught\n\t\t\t\t\tin React and Node js, with a desire for constant learning and problem-\n\t\t\t\t\tsolving.',
        languages: 'JavaScript, HTML/CSS',
        more: 'EmberJS, Ember-Data, React, Next, React Router, Redux/Recoil, Node, Express, Mongoose(MongoDB)',
        other:
          'Bootstrap, Tailwind CSS, Adobe Photoshop, Lightroom, Linux, Visual Studio Code',
        personalities: [
          'Accuracy',
          'Creativity',
          'Communication',
          'Organization',
        ],
        hobbies: ['CryptoCurrency', 'Motorcycling', 'Skiing', 'Photography'],
      },
      career: {
        employer1: {
          headline: 'Front-end developer',
          employer: 'Experfy',
          period: 'Feb 2022 to present',
          obligations: [
            'Writing well designed, testable, efficient code by using best software development practices',
            'Creating website layout/user interfaces by using standard HTML/CSS practices',
            'Integrating data from various back-end services and databases',
          ],
        },
        employer2: {
          headline: 'Service Technician',
          employer: 'Xenon-forte d.o.o.',
          period: 'Jan 2021 to Nov 2021',
          obligations: [
            'Troubleshooting hardware and software',
            'Printer and computer diagnostic and service',
            'Installation and configuration of print / scan equipment, computers and more',
          ],
        },
        employer3: {
          headline: 'Administrative and technical assistant',
          employer: 'Accounting d.o.o.',
          period: 'Jan 2015 to Dec 2020',
          obligations: [
            'Coordinating and performing administrative tasks',
            'Provide operational support to the team',
            'Creating and posting documentation, keeping a budget and cash register table',
          ],
        },
      },
      education: {
        college: {
          headline: 'Faculty of Political Science, University of Sarajevo',
          period: '2012 - 2014',
          profession: 'Bachelor of Business Communication.',
        },
        highSchool: {
          headline:
            'J.U. „Željeznički school centar“ Sarajevo and J.U. „Mješovita srednja škola“ Gračanica',
          period: '2003 - 2007',
          profession: 'Electrical technician.',
        },
      },
    };
  }
}

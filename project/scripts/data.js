const articles = [
  {
    title: `High quality`,
    content: `Straightforward APIs with 
    consistent cross platform behaviour..`,
    src: `./assets/images/articles/1.png`,
    keywords: [`Angular`, `Frontend`],
    author: `Some Body`,
  },
  {
    title: `How to RxJS in Angular`,
    content: `As the values of your component 
      inputs change over time, you may want to do 
      something with that data inside your component.`,
    src: `./assets/images/articles/2.png`,
    keywords: [`Angular`, `Frontend`],
    author: `Once Told`,
  },
  {
    title: `Top 15 Features of Angular`,
    content: [
      {
        head: `Addition of Dependency Injection`,
        text: [`It has added the information for the dependency and also regarding the ng-content selections for the data. It helps in wrapping the ng content selections and can help in checking files by creating scripts and using various interfaces. This would help us provide additional data that can be used in tools like Angular language services, which offers the functionality to offer suggestions and hints for the components or methods pre-defined in built-in libraries.`],
      },
      {
        head: `Merging of Multiple Transition File`,
        text: [`Following the convention, earlier, it was possible to merge only one translation file per program. But, after the release of new features of Angular 10, it is possible to combine multiple files in a single go. Also, this transaction of the files will be made possible via messaging functionalities.`],
      },
      {
        head: `Generic with ModuleWithProviders`,
        text: [
          `Ihe use of generic keywords has been made mandatory with the ModuleWithProviders in this version of Angular 10. This requirement has aroused to make the ModuleWithProviders patterns work with the Ivy compiling and rendering sequence. Before this implementation, the View layer of the MVC architecture has provided the facility with the ability to omit the generic keyword to be used with the ModuleWithProviders. `,

          `Again, a developer may want to use the View layer, and that might be dependent on the library that needs a generic type parameter to be included. Here, ngcc could be of no help, and only the application logic code would be migrated, resulting in the library’s fixation by its native author.To prevent this, skipLibChecks can be disabled by setting its binary value to false in config or while application update for using Ivy.`,
        ],
      },
    ],
    src: `./assets/images/articles/3.png`,
    keywords: [`Angular`, `Frontend`],
    author: `The World`,
  },
  {
    title: `Angular team streamlines feature requests`,
    content: `Feature requests will be reviewed for 
      alignment with existing projects on the Angular roadmap.`,
    src: `./assets/images/articles/4.png`,
    keywords: [`Angular`, `DevOps`],
    author: `Gonna Roll`,
  },
  {
    title: `Impact of SAP ABAP in today's Business world`,
    content: `Over the years, SAP had evolved as a one of 
      the popular ERP for its extensive capabilities.`,
    src: `./assets/images/articles/5.png`,
    keywords: [`SAP ABAP`, `SAP TM Consultant`],
    author: `Sharpest Tool`,
  },
  {
    title: `ABAP Programming for SAP`,
    content: `By working with ABAP in SAP NetWeaver, companies running 
      the SAP ERP and SAP S/4HANA business solutions have the opportunity 
      to customize those systems to better meet their needs.`,
    src: `./assets/images/articles/6.png`,
    keywords: [`SAP ABAP`, `Programmer`],
    author: `The Shed`,
  },
  {
    title: `Must-read books to learn Java programming`,
    content: `If you are learning Java Programming, then be ready 
      to be introduced to some of the most awesome books to 
      learn and master Java Programming in this article.`,
    src: `./assets/images/articles/7.png`,
    keywords: [`Java`, `Programmer`],
    author: `She Was`,
  },
  {
    title: `Spring vs. Java EE`,
    content: `At first, it was Java, and there was Java Community 
      Process, the procedure in accordance to which all revisions 
      take place, and new versions of Java itself 
      and related specifications come out.`,
    src: `./assets/images/articles/8.png`,
    keywords: [`Java`, `DevOps`],
    author: `Looking Kind`,
  },
  {
    title: `Rational Numbers With Python Fractions`,
    content: `The fractions module in Python is arguably one of 
      the most underused elements of the standard library.`,
    src: `./assets/images/articles/9.png`,
    keywords: [`Python`, `Design`],
    author: `Of Dumb`,
  },
  {
    title: `9 Amazing Articles on Python Programming`,
    content: `Since there is so much changing so fast, 
      we gathered some of our favorite pieces. We hope they 
      help you with your Python programming journey!`,
    src: `./assets/images/articles/10.png`,
    keywords: [`Python`, `Programmer`],
    author: `Her Finger`,
  },
  {
    title: `The Danger of Dark Patterns`,
    content: `Dark patterns are a popular design topic but 
      defining them can be difficult. That’s because 
      they’ve become so prevalent that many have been adopted 
      as design conventions.`,
    src: `./assets/images/articles/11.png`,
    keywords: [`Design`, `DevOps`],
    author: `Her Thumb`,
  },
  {
    title: `30 Beautiful Google Fonts for Your Website`,
    content: `Finding attractive, user-friendly, legible fonts for 
      your website isn’t always easy. 
      Finding the ones you want to use, and 
      pairing them up is a time-consuming process.`,
    src: `./assets/images/articles/12.png`,
    keywords: [`Design`, `Frontend`],
    author: `Shape of L`,
  },
  {
    title: `Is devops becoming a cloud-only sport?`,
    content: `Organizations that use devops within complex cloud 
      deployments are more successful. A new report reveals 
      the practices that differentiate elite performers. `,
    src: `./assets/images/articles/13.png`,
    keywords: [`DevOps`, `Programmer`],
    author: `Her Forehead`,
  },
  {
    title: `IBM continues to look to the hybrid cloud`,
    content: `The past month has seen a series of interesting 
      updates with regard to IBM’s cloud native 
      strategy – and if there are two key areas to 
      concentrate on especially, it is open and hybrid.`,
    src: `./assets/images/articles/14.png`,
    keywords: [`DevOps`, `Angular`],
    author: `Well The`,
  },
  {
    title: `6 hidden risks of IT automation`,
    content: `Automation is increasingly seen as a key 
      IT strategy for competitive advantage, but pitfalls 
      await those who fail to heed precautions.`,
    src: `./assets/images/articles/15.png`,
    keywords: [`Programmer`, `Python`],
    author: `Years Start`,
  },
  {
    title: `The 10 Most Popular Programming Languages to Learn in 2021`,
    content: `There’s no question that software programming 
      is a hot career right now. Not all programming 
      jobs are the same, however.`,
    src: `./assets/images/articles/16.png`,
    keywords: [`Programmer`, `React`],
    author: `They Dont`,
  },
  {
    title: `What is SAP TM module?`,
    content: `If you will want to make a difference in an 
    industry, you will be wholly reliant on efficient 
    transportation logistics.`,
    src: `./assets/images/articles/17.png`,
    keywords: [`SAP TM Consultant`, `Java`],
    author: `Stop Coming`,
  },
  {
    title: `5 Epic React Tips To Use Today`,
    content: `These tips will not only make your code 
      cleaner and more reliable, but also aim to make 
      your development experience easier and overall more enjoyable.`,
    src: `./assets/images/articles/18.png`,
    keywords: [`React`, `Frontend`],
    author: `Fed Rules`,
  },
  {
    title: `React Tips & Patterns`,
    content: `React is pretty easy to learn if you know JavaScript, 
      however, it's pretty easy to lose track of your 
      project or just mess things up as it scales or 
      gets ready for a refactor or re-write.`,
    src: `./assets/images/articles/19.png`,
    keywords: [`React`, `Design`],
    author: `Ground Running`,
  },
  {
    title: `10 React JS Articles Every Web Developer Should Read`,
    content: `React or React JS is a JavaScript front-end library 
      from Facebook which lets you create HTML based GUI. It makes 
      the task easier by providing a component-based architecture`,
    src: `./assets/images/articles/20.png`,
    keywords: [`React`, `Frontend`],
    author: `Make Sense`,
  },
  {
    title: `How to write highly readable React code`,
    content: `When doing code reviews, developers rarely get enough 
      time to truly understand each line of code we’re reviewing. 
      Instead, we have to quickly ponder the different situations 
      where that code might fail.`,
    src: `./assets/images/articles/21.png`,
    keywords: [`React`, `DevOps`],
    author: `Your Brain`,
  },
  {
    title: `Redirecting URL`,
    content: `A url redirect is a mechanism that navigates a 
      user from one url or web page to another without them 
      clicking on a link. The redirected page can be on the 
      same server or on a different server.`,
    src: `./assets/images/articles/22.png`,
    keywords: [`Frontend`, `Programmer`],
    author: `Gets Smart`,
  },
  {
    title: `Inspecting and debugging CSS Grid`,
    content: `CSS Grid inspection is now possible from 
      the Elements Panel. This is helpful for debugging 
      CSS issues, and learning more about CSS Grid.`,
    src: `./assets/images/articles/23.png`,
    keywords: [`Frontend`, `Design`],
    author: `Your Head`,
  },
]

const randomDate = () => Math.floor(Math.random() * Date.now())

articles.forEach(el => el.date = randomDate())

articles.sort(() => Math.random() - 0.5)
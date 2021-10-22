const articles = [
  {
    title: `High quality`,
    summary: `Straightforward APIs with 
    consistent cross platform behaviour..`,
    src: `./assets/images/articles/1.png`,
    keywords: [`Angular`, `Frontend`],
  },
  {
    title: `How to RxJS in Angular`,
    summary: `As the values of your component 
      inputs change over time, you may want to do 
      something with that data inside your component.`,
    src: `./assets/images/articles/2.png`,
    keywords: [`Angular`, `Frontend`],
  },
  {
    title: `Top 15 Features of Angular`,
    summary: `It has added the information for the dependency 
      and also regarding the ng-content selections for the data.`,
    src: `./assets/images/articles/3.png`,
    keywords: [`Angular`, `Frontend`],
  },
  {
    title: `Angular team streamlines feature requests`,
    summary: `Feature requests will be reviewed for 
      alignment with existing projects on the Angular roadmap.`,
    src: `./assets/images/articles/4.png`,
    keywords: [`Angular`, `DevOps`],
  },
  {
    title: `Impact of SAP ABAP in today's Business world`,
    summary: `Over the years, SAP had evolved as a one of 
      the popular ERP for its extensive capabilities.`,
    src: `./assets/images/articles/5.png`,
    keywords: [`SAP ABAP`, `SAP TM Consultant`],
  },
  {
    title: `ABAP Programming for SAP`,
    summary: `By working with ABAP in SAP NetWeaver, companies running 
      the SAP ERP and SAP S/4HANA business solutions have the opportunity 
      to customize those systems to better meet their needs.`,
    src: `./assets/images/articles/6.png`,
    keywords: [`SAP ABAP`, `Programmer`],
  },
  {
    title: `Must-read books to learn Java programming`,
    summary: `If you are learning Java Programming, then be ready 
      to be introduced to some of the most awesome books to 
      learn and master Java Programming in this article.`,
    src: `./assets/images/articles/7.png`,
    keywords: [`Java`, `Programmer`],
  },
  {
    title: `Spring vs. Java EE`,
    summary: `At first, it was Java, and there was Java Community 
      Process, the procedure in accordance to which all revisions 
      take place, and new versions of Java itself 
      and related specifications come out.`,
    src: `./assets/images/articles/8.png`,
    keywords: [`Java`, `DevOps`],
  },
  {
    title: `Rational Numbers With Python Fractions`,
    summary: `The fractions module in Python is arguably one of 
      the most underused elements of the standard library.`,
    src: `./assets/images/articles/9.png`,
    keywords: [`Python`, `Design`],
  },
  {
    title: `9 Amazing Articles on Python Programming`,
    summary: `Since there is so much changing so fast, 
      we gathered some of our favorite pieces. We hope they 
      help you with your Python programming journey!`,
    src: `./assets/images/articles/10.png`,
    keywords: [`Python`, `Programmer`],
  },
  {
    title: `The Danger of Dark Patterns`,
    summary: `Dark patterns are a popular design topic but 
      defining them can be difficult. That’s because 
      they’ve become so prevalent that many have been adopted 
      as design conventions.`,
    src: `./assets/images/articles/11.png`,
    keywords: [`Design`, `DevOps`],
  },
  {
    title: `30 Beautiful Google Fonts for Your Website`,
    summary: `Finding attractive, user-friendly, legible fonts for 
      your website isn’t always easy. 
      Finding the ones you want to use, and 
      pairing them up is a time-consuming process.`,
    src: `./assets/images/articles/12.png`,
    keywords: [`Design`, `Frontend`],
  },
  {
    title: `Is devops becoming a cloud-only sport?`,
    summary: `Organizations that use devops within complex cloud 
      deployments are more successful. A new report reveals 
      the practices that differentiate elite performers. `,
    src: `./assets/images/articles/13.png`,
    keywords: [`DevOps`, `Programmer`],
  },
  {
    title: `IBM continues to look to the hybrid cloud`,
    summary: `The past month has seen a series of interesting 
      updates with regard to IBM’s cloud native 
      strategy – and if there are two key areas to 
      concentrate on especially, it is open and hybrid.`,
    src: `./assets/images/articles/14.png`,
    keywords: [`DevOps`, `Angular`],
  },
  {
    title: `6 hidden risks of IT automation`,
    summary: `Automation is increasingly seen as a key 
      IT strategy for competitive advantage, but pitfalls 
      await those who fail to heed precautions.`,
    src: `./assets/images/articles/15.png`,
    keywords: [`Programmer`, `Python`],
  },
  {
    title: `The 10 Most Popular Programming Languages to Learn in 2021`,
    summary: `There’s no question that software programming 
      is a hot career right now. Not all programming 
      jobs are the same, however.`,
    src: `./assets/images/articles/16.png`,
    keywords: [`Programmer`, `React`],
  },
  {
    title: `What is SAP TM module?`,
    summary: `If you will want to make a difference in an 
    industry, you will be wholly reliant on efficient 
    transportation logistics.`,
    src: `./assets/images/articles/17.png`,
    keywords: [`SAP TM Consultant`, `Java`],
  },
  {
    title: `5 Epic React Tips To Use Today`,
    summary: `These tips will not only make your code 
      cleaner and more reliable, but also aim to make 
      your development experience easier and overall more enjoyable.`,
    src: `./assets/images/articles/18.png`,
    keywords: [`React`, `Frontend`],
  },
  {
    title: `React Tips & Patterns`,
    summary: `React is pretty easy to learn if you know JavaScript, 
      however, it's pretty easy to lose track of your 
      project or just mess things up as it scales or 
      gets ready for a refactor or re-write.`,
    src: `./assets/images/articles/19.png`,
    keywords: [`React`, `Design`],
  },
  {
    title: `10 React JS Articles Every Web Developer Should Read`,
    summary: `React or React JS is a JavaScript front-end library 
      from Facebook which lets you create HTML based GUI. It makes 
      the task easier by providing a component-based architecture`,
    src: `./assets/images/articles/20.png`,
    keywords: [`React`, `Frontend`],
  },
  {
    title: `How to write highly readable React code`,
    summary: `When doing code reviews, developers rarely get enough 
      time to truly understand each line of code we’re reviewing. 
      Instead, we have to quickly ponder the different situations 
      where that code might fail.`,
    src: `./assets/images/articles/21.png`,
    keywords: [`React`, `DevOps`],
  },
  {
    title: `Redirecting URL`,
    summary: `A url redirect is a mechanism that navigates a 
      user from one url or web page to another without them 
      clicking on a link. The redirected page can be on the 
      same server or on a different server.`,
    src: `./assets/images/articles/22.png`,
    keywords: [`Frontend`, `Programmer`],
  },
  {
    title: `Inspecting and debugging CSS Grid`,
    summary: `CSS Grid inspection is now possible from 
      the Elements Panel. This is helpful for debugging 
      CSS issues, and learning more about CSS Grid.`,
    src: `./assets/images/articles/23.png`,
    keywords: [`Frontend`, `Design`],
  },
]
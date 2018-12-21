# 1. Requirements, architecture, design and process

This section describes the requirements of the project, the architecture that we

have chosen, the design of the actual components and the process we undertook

to build them in the end.

## 1.1. System requirements

In the Hackernews project we were required to build a clone of the well-known hackernews website. As such, the system must contain a backend to store incoming data and to serve the frontend with content. The frontend is the user facing side of the system that talks to the backend via an HTTP API to fill the website with content and handle all user interaction.

  

Via the web application the guest users can view the posts and comments. Registration and login is provided for the users to be able to post comments or posts/stories which they can also up or down-vote. Only registered and logged in users are allowed to inject new data into the system, that is, to post comments, stories and to vote. The backend must not accept data unless it comes from registered users or the simulator.

  

Karma points are used to allow users to vote of which 500 is required. To quote from the official requirements documentation:

“Karma points are calculated as the number of up-votes a given user's content has received minus the number of down-votes. Regardless of karma, all users have the option to flag submitted content as spam.”

  

The system must be able to process data coming from the simulator which is sending data to seed the database. An additional endpoint is provided by the system’s backend API to query the latest ingested post into the database - it returns the ID of the very last data point injected by the simulator into the database. Another API endpoint is provided to query the status of the system. The status can be Alive for when the system is up and running, Update when it is under maintenance or update, and Down for when the system is not functioning.

  

The system is deployed to a publicly accessible server and must:

-   Have an uptime above 95%
    
-   Not lose any content sent by the simulator
    
-   Keep track of content while it is non-operational and process it when it comes back alive.
    

## 1.2. Development process

In this part you should show off by telling us all you know about software

development processes and describe which concepts you used to structure your

Development.

### Initial steps

We started off by gathering the requirements from the provided material. This mostly included Helge’s requirements documentation and the [hackernews website](https://news.ycombinator.com/) for inspiration.

  

We spent time initially designing the database schema that provided us with an understanding of how to build the system on top of data-persistence.

  

![](https://lh3.googleusercontent.com/cQ1sVd6PYXrvfGPgKsH2i3Vr-LFRMHn6VgW5qfFZreVOPxaf4Bq3IgxEg23a_glb_tB2AQjJMYtgwqfvLq4nR9qDrZyed6z4ys4F-W395NEGplJU57i4OB8R_D581i_Kmhiaag_G)

Brainstorming by the whiteboard of the initial database schema

### Github

Git is used to prevent code-loss, collaborate within the developer team and track who built what within the codebase. The code is the pushed to Github where it lives in the cloud. We made multiple commits per day and the aim was to split up the requirements into small workable chunks and focus on a single problem within each commit.

  

![](https://lh6.googleusercontent.com/Uz7Bq3tY1hRwSSvAzMWpOvn0AKnSaO5XejwfitnFLJoqho38sozqMY7AJ7tX1L24fw90AOA8l9_1VmCsqFUx__hs5KHvt3iaGVnpTcDFL3Kwij64bwYcJWADqUFjF3fr9UQKjIYI)

Commit frequency on Github Insights

  

### CI/CD

We spent a considerable time upfront to build a Continuous Integration and Delivery pipeline. CircleCI hosted our pipeline which is a free provider for open-source projects.

  

The initial idea was to split the pipeline into three parts: build, test and deploy. However, the test phase was not included due to the lack of testing in our project.

#### How does the pipeline work?

A new commit pushed to github will trigger the pipeline. The build phase checks out the source code and after installing the dependencies it builds both the back and front-end code for production. This is then handed over to the deployment phase. At this stage, the front-end code which is a static web application consisting of HTML, CSS and JavaScript code, is pushed to a bucket on AWS. A bucket is a file storage system that can be served via a HTTP server publicly. The backend code is deployed to the Elastic Beanstalk service on AWS.

  

There are multiple benefits to a pipeline that our team found extremely productive during the development and maintenance of our system [1].

  

#### Outstanding advantages

-   Deployment to production
    

With the help of a CI chain, the code is pushed into production in 40 seconds on average. This is an important practice as once a small feature is done it gets shipped within minutes.

-   Never ship broken code
    

Should the pipeline fail at any of the above steps it will not deploy the broken code to production. A broken pipeline is the primary focus of the developer. They must assure it is fixed as soon as possible since a new feature with value to the business is withhold from delivering this value.

-   Repeatable processes
    

Modern development practices are standardized and written into the pipeline which is applied to each time a change is made to the codebase. This will assure that an important step is not forgotten and we can trust that only such code ends up deployed into the hands of the end users.

  

### Kanban Board and Issue Tracking

We used the an Automatic Kanban board on Github to manage our issues (workables). It helps keeping track of what needs to be done, what is in progress and what is finished in a visual and simple layout.

  

![](https://lh4.googleusercontent.com/LJIEY_KVT7jpo2hYSKS9D5Q8HlRCe0w7cHYFpoP8SXjB0YsSQAwz1NEnni97qOrRZCtvSNWVZIStJcM7gMJ0d-MRstAf1-jnYkWbZbgl2v6B9IBaq-52_Y4sQ03uICPpqn-8JbBW)

Status of our Kanban-board when our project was over

  

#### Issue creation![](https://lh3.googleusercontent.com/2wdltQEip9D2qAeha_ThcwIVCOlFimzPfF_wiM7TYGsZMRrxKnqQLEW87EjOy8ngcDiH4lQetnd91enw99_VCCv9FyYi9-WjWVJ9Yzq9Mksy6Fpu9li73U-IwRskd6gub658Em4m)

When an issue is created for a new feature or bug fix, labels are assigned by the developer. They must assign the priority of the issue and estimate how long will the development approximately take. Whoever starts working on the project must look at this board and pick up an issue from the To-do that is most urgent and is timely for the developer.

  

The automatic Kanban board keeps track of the status of the issue. When one is created we assign a Status - to do label that is picked up by the board and presented in the leftmost column. When the work is initiated a Status - In Progress label is assigned moving it automatically to the center column. Closing an issue will place it into the Done column on the left.

  

## 1.3. Software architecture

Different technologies and as such, dependencies, are used for the web application and the server side of our system. For performance and efficiency these parts are best deployed individually to a service that suits them most. Therefore, we found it reasonable to split the architecture into two large parts: frontend and backend. These parts will then communicate via an HTTP API protocol.

### Backend: server and database

Fortech is a romania software development company that created an open-source project template for an express-mongo application. We used this as an inspiration for our backend code as it implements a clean and modular architecture. [Link to project template](https://github.com/FortechRomania/express-mongo-example-project).

  
![](https://lh5.googleusercontent.com/eUjqTEsDCLKeXpDkv46es2lB0gL0hfzPYb-bp-qUlCA40PzsGTl_2qGsQK_6aZ652DD0OvUP4A7GgFlhL2xrHV1O5nQc3VELg5nMzEuI5Svyy6rbzvf6Cf6zkdkd-9HMvqCU8tFA)

Each functionality or entity is implemented in its own folder (comment, post, story, user) - see the contents of the “app” folder. This way we achieve a separation of concerns and structures the codebase efficiently. For example, when a developer needs to work with users they know exactly where to look. Usually, an index.js file will serve as the wrapper (router) for these entities.

  

Within these “entities” one usually finds four files: controller, model, repository and router.

The router.js is the first place where a call comes which is then routed to the controller based on what function is invoked. The controller is responsible for handling the business logic and talking to the repository. The repository handles the data in and out of the database. The model defines the structure/schema of the database and with the help of Mongoose it ensures data consistency.

  

Configuration lives within its own folder and each file that needs configuring can find load it from a single source of truth. This helps us separate the what from the how.

  

### Frontend: the web application

We used the Vue.js frontend framework to help us structure the client side source code.

  

Views are entire pages presented to the user. HTML code within views is modularized into components. One can find a similar separation of concerns with the help of the folder structures.

  

![](https://lh6.googleusercontent.com/yU9_unNBpqe2gp7GIxmEYVvAxdQemuCW-UChwL7zGq6Fjsvoqc2Oefslr-yzdP7qfG6wyxk5uTDbfzfr9mLJmDeCvptV20eCxXWSfPAcsiOwbC9DXiCkaEgJ29t6C_fDZsWeINEU)

  

## 1.4. Software design

Here you should sketch your thoughts on the software design before you started

implementing the system. This includes describing the technical concerns you

had about the system before you started development, together with all the

technical components you came up with to fix these concerns and meet the

Requirements.

  

Thanks to having built a handful of web applications with backend, including user management and data persistence, many design concerns have already been thought through. However, some aspects of the hackernews clone requirements had to be analyzed to find reasonable solutions.

### Uptime

A requirement of 95% uptime meant that we needed an automatic system to keep an eye on the availability of the system. In case anything went wrong, like the server shut down or became unresponsive it had to be restarted immediately.

  

Using Elastic Beanstalk for backend deployment helped with this concern. It monitors the system status and in case the server stops with an error code it restarts it automatically. Alerts were set up to notify us via email about unresponsive API endpoints.

### Simulator

Incoming data form the simulator has to be processed to end up in the same data structure as when users submit new posts or comments.

  

We designed an API that manages these two accordingly. One is implemented to handle the API simulator and distributes the data accordingly for persistence. Another one takes data from users persists it to the same database with the correct structure.

### Authentication

The system must only take data from users that are registered and logged in into our system.

  

To solve this problem we implemented Json Web Tokens (JWT for short). When a user logs in they receive a token that is signed with a secret code hence we can trust that it is issued by our system. This will contain the user information and the data can be trusted to come from someone we can identify. Although it has some disadvantages, such as it cannot be invalidated in case of identifying an attacker, it was an easy to use solution that covered our requirements criteria.

### Server architecture

Any large system must have well-defined and clean architecture. The reasons are obvious but creating one needs lots of experience and expertise.

  

We found a great architecture in an example project created by tech company called Fortech. As described above in the system architecture section, we separated the functionalities/entities into their own modules. This helped us tremendously in navigating the large codebase and tracing errors. It also allows for a more easy extension of the system in the future.

## 1.5. Software implementation

In this section we talk about how following the initial software design and process has worked out in our group. We also elaborate on challenges that came up during the implementation.

### Issue management

Some members of the group have been accustomed to using the above defined issue management and labelling at a company called Praqma. We initially set out with a stable plan on how to manage issues, setting up the automatic Kanban board on Github and creating the labels.

  

In practice, however, we often missed to work on a specific issue at a time. What we did instead, that came more naturally, is that when an issue came up we went ahead and fixed it in a new commit. The good side is that we went straight ahead into solving the problem, but it created silos in the group about who was working on what.

  

Creating issues on Github was a big help too. When done properly it made us aware of the remaining work and also created transparency about what needs to be done toward other group members.

### Testing

A good side of a CI pipeline is that it can enhance code coverage and ensure tests are always executed. Provided that test cases exist. Since it was not a requirement to have tests but to have a certain uptime we cut some corners in this area.

  

In our experience, however, manual testing was reliable enough and no major problems arose during the life of the project due to the lack of test cases.

### Deployment and Maintenance

The decision to use Elastic Beanstalk, a managed service from Amazon Web Services has received the most consideration whether it was a good choice or not.

  

Requirements that came up after the development of the system, like logging with Prometheus and supporting the SLA contract caused some headaches in our group. As it turns out, it is very hard if not impossible to customize our managed deployment environment with custom software such as Prometheus. We got it working for a short period of time, but this way of logging was not reliable with our setup. Although Elastic Beanstalk (EB) is supposed to provide logging that is very similar to Prometheus, some parts of the logging proxy were broken and after days of trying to make it work we gave up on advanced logging.

  

On the other hand, benefits were outstanding when using EB. Zero-downtime updates, load-balancing and auto scaling are all features that most developer teams are happy to have out of the box. It also taught us a lot about the workings of such features when we dwelled deeper into them during the assignments.

### Overview

Generally speaking, we were efficient with our implementation. The decision to follow a software company’s architectural pattern taught us a lot about implementing modular code in Node.js - such as how to do high cohesion and loose coupling.

  

When team members took responsibility for certain parts of the work our productivity went way up. This was a good lesson on the challenges of self-managed developer teams.

  

# 2. Maintenance and SLA status

## 2.1 Handover

In the documentation we were given access to the log files and a login for grafana.

To access the grafana we were given a link in the documentation and login credentials.

To access the log files, we were told to send our public ssh key to a given email and there were clear instructions in the document of how to access the log files.

We were satisfied with the documentation given to us, as it contained the information we needed and we therefore felt confident that we could monitor their website.

## 2.2 Service-level agreement

-   95% uptime on server.
    
-   3 seconds response time. (30-50 posts at max)
    
-   5% or less data loss.
    

Making the SLA was pretty straight forward, both parties were in an agreement about the requirements.

## 2.3 Maintenance and reliability

We never got to see the log files, as they location they were supposed to be in, never got added. When connecting to the ssh, we get into a guest folder which is just empty. We tried to check the other users, but no log files was shown there either, we were told they would be added, but it never happened.

Therefore we only had grafana and our self to check the actual website and see both if it was working and how it was operating.

  

The first timed we tried to access the website, we just got an error, we therefore opened an issue

![](https://lh3.googleusercontent.com/2fdLUBnH58FbscGYOzbqhrUmrgKhKFgl1hvfT5XOEB4imViL4_28iNe1yskAdTieMS37I-abT6cjjy4_EjXDDWeYDPGsZbHabSNgnceAH9d_c6tJT-yPwY6WNrJRO6l3TAicKrE1)

As as shown, we got a very fast response.

Afterwards we started to look around on the website, and saw a lot of issues, such as various tabs not working (just going 404) and stories not being shown / updated. We therefore opened issues on all the problems

![](https://lh3.googleusercontent.com/QceeB2vny11N8Z8kRf3KGCXk9uTqgSQY9hpVMUI3Ul_rxX0sFT5kNnADexYvmNqoUv2raZpT1AkrCnKNc9o08Rf_xfJ3i6yGh04JH3chWY-OfVJ9gBaUM7fmej9uYs_mRK7-8m7W)

As shown in the image above, then we made a lot of issues (not very technical, but since nothing was working, we had to start with the very basic)

However we never got any response on any of it, we didn’t have the chance to make more specific issues.

The only actual issues that were solved, was the “not able to access website” and the tabs not working (they instead made it just load the frontpage, instead of being sent to links not working)

  

We made a follow up issue regarding the monitoring

![](https://lh3.googleusercontent.com/oaGz0kk84W1oWBE6DEdaRSwktGI_tMrjnDd0lwvfPQLRqm8yVHs743bLv_2tr8ktBwgO68pAeVtdTGNEIYhrfny87k7gYiosIRJmKKRni7wqPj1M__72efJfa55kRvOkEZE5NHhV)

But didn’t hear anything. We then tried to make a post in the one issue that was responded to:

![](https://lh3.googleusercontent.com/41jcmMK1dFcn2NxPm_nQvLuHW6Nmj61CXFue0dcm8MDxoTg79mLPLFvoopzHpfYpw7zehNRpbimq9qZkFBkCmS63lsA0UL92ZRd6yF61tL6nzjH6V4x_l5PpR1BIBpzYf3L4jW5P)

But sadly again never heard anything.  
Without the being able to see the uptime, the response time and data being sent, then we couldn’t monitor it the way we wanted to. And without any response on the issues, then it became quite difficult. However whenever we checked the website, it was running and responded quite fast to the few things it was able to do. And with grafana we could only trace 24 hours back, but when we checked there too, it was also running as expected.

  

To reflect on this section, then the overall communication with the developer team was very poor, as we never really got any feedback on anything, and hardly any of the issues we created were addressed. So what seemed to start out well, ended quite poorly.

  

# 3. Discussion

## 3.1. Technical discussion

### Deployment platform

By deploying our application to Elastic Beanstalk we gained a huge advantage in that we didn’t have to worry about the scalability of our server. This is all handled by AWS, so we could focus on the application itself and its performance. We could see us self use such a service on a large project again in the future. However, when certain requirements come in from above that are not compatible with this setup an alternative should be considered that is more customizable - such as a Digital Ocean droplet or a clean Ubuntu server from a cloud service provider.

### The need for ops in a DevOps culture

A lot of interesting challenges came up when we split the DevOps into developer and operations teams. Response from the group whose server we operated was close to non-existent so our input was not very useful there. However, we received valuable feedback from our operators that actually helped us improve the website.

  

It probably boils down to how much responsibility individuals take and the quality of their work. However, in a time when most companies will apply some version of DevOps it can be viewed as an experiment to see what are the goods and bads of operating another team’s software in production. Lessons are learned, DevOps is a good practice.

### Toolstack and Processes

Generally speaking, we are satisfied with our toolstack.

  

On the backend, Node.js proved to work well and with a good architecture it was rather easy to manage a large system. Also its asynchronous and designed with the focus of making scalable web applications, so we would say this was a perfect fit. Mongoose for managing MongoDB schema provided a useful skeleton for the otherwise unrestricted document database. MongoDB itself was easy to set up, overview statistics and gave the freedom for an agile development style.

  

Client side wise, Vue.js is an awesome framework. It is not only easy to structure your code into components but the abstraction it offers makes working on the front-end more clean and manageable on large systems.

  

A pipeline is a great way to speed up product delivery on a frequent basis while ensuring code quality by automated pre-programmed steps.

## 3.2. Group work reflection & Lessons learned

We did not have roles assigned for our team members so we cannot know surely if this would have made the development easier. However, a lesson learned was that when individuals take responsibility great things will happen and get done. Sparking interest in the technology by a quick demo from those who are already familiar with it can get people to start working, learn more and implement it into code.

### CI Pipeline

Implementing a pipeline is one of those things that require an early investment but keeps paying off very well on the long term. In case of this project it was no different. Once the setup was done, deploying code into production happened quickly while being reassured about not breaking the production code.

### Self-managed services

Since services sold by cloud service providers offer everything and have a solution for most of the developer’s needs, it is easy to believe they do not have any disadvantages. Our group was certainly in this belief until specific requirements came up for our system that were not compatible with these technologies. Lessons are learned that these services will not work for everything and the use case needs to be properly analysed.

### One more important thing we learned comes here
##### Handling large quantity of data and traffic

This was the most important thing we learned in this project, since last semester we talked about how we should be conscious of our choices when it comes to technologies. That might be Databases, language, frameworks and so on.

But specifically our database choice was really good here, because we needed a fast writing database[2] that could handle large quantities of data. And because we chose a Javascript stack and we work mostly with JSON, we felt that MongoDB was the perfect fit. This meant we didn’t need to do heavy business logic to parse this data, only simple renames and nesting for it to fit nicely into our database. Also the fear of losing a post because of faulty writes or server breakdown is not really mission critical. Same goes for the choice of Node.js and how its able to scale without many limitations.  
  

  
  

# References

1.  [https://dzone.com/articles/9-bene-ts-of-continuous-integration](https://dzone.com/articles/9-bene-ts-of-continuous-integration)
    
2.  [https://www.arangodb.com/2015/10/benchmark-postgresql-mongodb-arangodb/](https://www.arangodb.com/2015/10/benchmark-postgresql-mongodb-arangodb/)

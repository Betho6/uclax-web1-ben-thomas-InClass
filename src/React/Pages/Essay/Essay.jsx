import React from 'react';
import styled from 'styled-components';

const Essay = () => {

    return (
        <EssayStyled className='Essay'>
        <h1>Final Project Homework</h1>
        <h2>Explain the difference between HTML, CSS and JS.</h2>
        <p>Html stands for Hyper Text Markup Language. Markup language refers to the fact that HTML documents contain content which is marked by tags. The tags catogrize the information that the webpage interprets. The tags have predetermined styling that allows the information to follow basic hierarchy based on the tags used. On its own HTML will display plain content with a defualt appearance.  </p>
        <p>To give any type of design astetic to an HTML document it must have an attatched CSS document. CSS stands for Cascading Style Sheets. CSS uses HTML tags to detmerine where to apply stylistic treatments to the conent of your web page. The author of the code identifies a tag and then determins what conent with that tag so appear like on the site.</p>
        <p>CSS and HTML can be used to create a static page that will display content for the end user. However, to offer any ability to interact with the page JavaScript is requiered. JavaScript uses logic statments to tell the page how to behave given certain perameters. One common way to do this is with If/ then statments. If a user does X, then the page should do Y, additional criteria can be given as well. An example would be a user pressing a button that prompts the page to do something like show an image or request additional information.</p>

        <h2>What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?</h2>
        <p>A single page application simply put is a web app that doesn't require the user to navigate to multiple pages. The code is only loaded once when the user initially starts the app. The ability to store recived data can also allow the user to run the application without internet connection, it is only requiered when new data is sumbited or requested. The limit of the content can also allow pages to load much faster.</p>
        <p>Multipage applications are more complex and allow the user to nagivagte the site by linking multiple HTML documents. Sites that are used with the objective of providing the user with information rather than interactivity are more ideal for Multipage apps. Something like a web store where users navigate multiple pages to browse products. Since multipage sites are built with multiple html documents there size is unlimited. Multipage sites also have an advantage with Search Engine Optimization. Multiple pages provide more key words that a web search can flag and show up in a users query. </p>
        <h2>What is the differnece between a Web Designer, Front End Developer and Back End Developer?</h2>
        <p>A front-end developer is responsible for desinging what the user interacts with. They are responsible for developing the style, and layout of the site using CSS and HTML, but also some of the interactions the user has with the application. A front-end developer needs to work with a user experience designer to collect qauntifiable data to improve the way an application services client needs.</p>
        <p>A back-end developer uses programing languages to build infrastructrue that makes web applications possible. Back-end developers make infrastructrue that allows servers and databases to serve up data. Back-end Developers identify client needs to best determine technelogical requierments to create solutions. A Full Stack web developer has a skill set that allows them to float between both disciplines. A front-end developer can use their knowledge to communicate fluiently between teams and assess client needs on both sides of an application.  </p>
        <p>Web Designer visual design of an application</p>
        
        <h2>Session 6: Distinguish the difference between site relative, document relative, and absolute paths</h2>
        <p>A relative link is a path on a website that is dependant on the location of the page displayed to the user. It allows the content creator to ommiut the URL of the site by navigating the user to a page saved in an adjacent directory. They're able to do this because the user is already in the same directory or file tree as the page they're being liked to.</p>
        <p>An aboslute link is a link that uses a pages full URL to link directly to that page. The link will work for the user irrespective of their location in the file directory of the sire they're. The link is aboslute because it does not refrence a location in the sites file directory but insted the address of the pages location on the web. Document relative links are file paths relative to the document you're working on. </p>

        <h2>Final Project Description</h2>
        <p>For my final project I would like to do a website for a multi-use space that is owned by a brewery that owns and opperates in the space. The other stalls are rented to be used by outside vendors. Sections on the website would include tap list for the brewery, as well as a list of vendors. One page would advertise upcoming events at the multi-use space. Another page to create an account for their loyalty program and to join a mailing list, while another would be a prospective vendor contact form. The site could include a image gallery that's imported from the venues other social media accounts or populated using the venues hash tag.</p>
        <h2>What does it mean for a company to be agile? What is the purpose of being agile? What are the Pros and Cons</h2>
        <p>An agile company is one that is able to change and respond quickly to external factors. Factors that allow a company to act quickly are colaborative environments with remote possibilities. Options like this allow for more rapid time lines and quick movement. Agility offers a clear competative advantage in the sense that it allows a company to beat the competition to accomodate to client or customer needs. Approach to project managment.</p>
        <h2>Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.</h2>
        <ul>
            <li>A project manager is responsible for determining the scope of work for a project, as well as setting time lines and ensuring that deadlines are being met. A project manager is also responsible for adhering to budget and determining hours for personal.</li> 

            <li>Ensure the product is running optimally. Communicates bottlknecks.</li>
            
            <li>A Wed Developer/Engineer is the person on a team who is specifically for building out the product. A Scrum master is a position who is responsible for maintaing that a team adhere to agile values that they previously outlined.</li> 
        
            <li>A Scrum Master is some one who has a strong knoweledge of Scrum Frame work. A UX designer is responsible to ensure an optimal and plesenet end user experience of a product.</li>   
            
            <li> UX designer uses information, user behaviors/stories to work with the development team to ensure the product is the best possible experience for the end user.</li>

            <li>A quality ensurance tester is a gatekeeper for issues and bigs before it goes to production. They also write scripts to run automated tests</li> 
        
            <li>DevOps is a working philosiphy that combines IT Operations and software developement. Development Opereations, handles server architecture and deployment of apps</li>
        </ul>
        <h2>What is the difference between jpg, gif, png and SVG images?</h2>
            <ul>
                <li>JPG a jpg is an image file format that is optimal for its file compresion, whcih allows pages to load faster. Another benifit is that a jpg's color content is nearly limitless. However Jpg's do not preserve transparenct or allow video/motion.</li>
                <li>A gif also can have a small file size to preserve loading speed on web pages. Gifs also preserve transperecny, and allow for motion. However, gifs color gamut is limited to only 256 colors so complex or gradianted images can suffer in quality</li>
                <li>Pngs are a file type ideal for images that will live digitally, as they do not support CMYK color images, however, they also do respect transperancy and have a larger color gamut than gifs.</li>
                <li>An SVG stands for Scaleable Vector Graphic. The advantage of an SVG is that it preserves the vector quality of images, and allows individual components to be animated.</li>
            </ul>
        <h2>What are testing environments</h2>
        <p>A testing environment is a combination hardware and software that emulate live conditions for an application to accuratly test for bugs. Some things that may be required to to set up a test environment could be a variety of opperating systems, access to data bases, internet, or network access.An important part of setting up a testing environment is verifing what is relevant to the application in order to midigate cost and time expendature.</p>
        <h2>Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?
        </h2>
        <p>An Image should be used as part of the conent when it is important for understanding the information on the page. One advantage of images declared with an HTML img tag is the ability to add alternate text. This helps for accesibility, so if the images are requiered for understanding the conent of the page it should be written using an HTML tag. Another benifit is for Search Engine optimization. Web Search engines do not see images so they will pull results using alternate text.
        </p>Incorperating an image into the apperaence using CSS is optimal when the image serves the display but not the content of the site. Using CSS you have easier options to manipulate and style your image, or incorperate it into the background.<p></p>
        </EssayStyled>

    );
}

export default Essay;

const EssayStyled = styled.div`
    
`;
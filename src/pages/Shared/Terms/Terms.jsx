import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Our terms and Conditions</h1>
            <p>By accessing and using this website, you agree to be bound by these terms and conditions.
                All content on this website is provided for informational purposes only and should not be relied upon for any purpose.
                We reserve the right to modify or discontinue the website at any time without notice.
                We do not warrant that the website will be free from errors, viruses or other harmful components.
                Any unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.
                You are responsible for ensuring that any information or content you post on the website is accurate and does not infringe the rights of any third party.
                We may use cookies to personalize content and ads, to provide social media features and to analyze our traffic.
                We are not liable for any damages arising from the use or inability to use this website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;
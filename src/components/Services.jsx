import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Table from 'react-bootstrap/Table';
import DACFP from './Assests/DACFP.jpg'
import FINTECH from './Assests/FINTECH.jpg'
import '../index.css';

const About = () => {
    return (
        <div className='text-center'>
            <h3 className='mt-5'>Our Services</h3>
            <Table responsive className='border'>
                <thead>
                    <tr>
                        <th className='tableCell'>Disclosure Portal</th>
                        <th className='tableCell'>Project Manager</th>
                        <th className='tableCell'>Developer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='tableCell'>
                            Manage Projects
                            Task Assignment
                            Collaboration Tools
                            Store Documents
                            Communications with stakeholders
                            Deliver disclosures for compliance.

                        </td>
                        <td className='tableCell'>
                        Brainstorming Project
                        Progress Tracking
                        Reduce Bottlenecks
                        Visualize & Refine Layout
                        Vendor management
                        Go to Market Planning
                        

                        </td>
                        <td className='tableCell'>
                        Designing web projects
                        Front-end (user interface) 
                        Back-end (server-side) 
                        desktop and mobile optimization
                        User Experience/testing
                        Cybersecurity subscription
                        
                        </td>
                    </tr>

                </tbody>
                <thead>
                <tr>
                    <th className='tableCell'>Course Audits</th>
                    <th className='tableCell'>Learning Management</th>
                    <th className='tableCell'>Compliance</th>
                </tr>
            </thead>

            <tbody>
            <tr>
                <td className='tableCell'>
                    Manage Projects
                    Task Assignment
                    Collaboration Tools
                    Store Documents
                    Communications with stakeholders
                    Deliver disclosures for compliance.

                </td>
                <td className='tableCell'>
                Course Snippets 
                Learn new technology trends.
                Explores Crypto, Web 3, A.I., Blockchain, 
                Quality content,
                Continuing education (CE)
                Enhanced learning opportunities


                

                </td>
                <td className='tableCell'>
                Referrals to Consultants 
                Compliance/Content Review
                Disclosure Scripts
                Senior/Experienced compliance experts
                Attorney network with multiple specialties
                Liaison with regulators
                
                
                </td>
            </tr>

        </tbody>
            </Table>

            <h3 className='mt-5'>Featuring Course Audits from</h3>
            <Table responsive className='border'>

                <tbody>
                    <tr>
                        <td className='tableCell'>
                        <Figure>
                        <Figure.Image
                   
                          src={DACFP}
                        />
                        </Figure>

                        </td>
                        <td className='tableCell'>
                            
                        <Figure>
                        <Figure.Image
                          src={DACFP}
                        />
                        </Figure>
                        </td>

                    </tr>

                </tbody>
            </Table>

        </div>
    );
};

export default About;

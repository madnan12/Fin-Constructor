import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Table from 'react-bootstrap/Table';
import public_dashboard from './Assests/public_dashboard.png'

const About = () => {
    return (
        <div className='text-center'>
            <h2 className='mt-5'>How we work</h2>
            <p>

            Select a digital tool and business model of choice<br />
            Setup a Discovery Call for scope/recommendations<br />

            Sign Up/Onboarding

            </p>

            <Figure>
            <Figure.Image
              src={public_dashboard}
              width={200}
              
            />
            </Figure>
            


            <h4 className='mt-5'>Three ways we support firms with Project Management Goals</h4>
            <Table responsive className='border'>
                <thead>
                    <tr>
                    <th className='tableCell'>Project Manager</th>
                    <th className='tableCell'>Project Assistant</th>
                        <th className='tableCell'>Do It Yourself (DIY)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='tableCell'>
                        We help firms with the whole process from start to finish….those who need helps to build, plan, and manage projects

                        </td>
                        <td className='tableCell'>
                        We provide project manager assistance and portal access for firms who want some assistance, but have their own team, and resources to develop their sites.  
                        

                        </td>
                        <td className='tableCell'>
                        For firms who want a system to manage all development but need a project management portal
                        
                        </td>
                    </tr>

                </tbody>
                <thead>
                
            </thead>

           
            </Table>
        </div>
    );
};

export default About;

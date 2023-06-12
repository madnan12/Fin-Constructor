import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Table from 'react-bootstrap/Table';

const Pricing = () => {
    return (
        <>
        <div className='text-center'>
            <h3 className='mt-5'>Pricing</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th className='tableCell'>-</th>
                        <th className='tableCell'>Gold</th>
                        <th className='tableCell'>Silver</th>
                        <th className='tableCell'>Bronze</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='tableCell'>
                            -
                        </td>
                        <td className='tableCell'>
                            <h6>$inquire</h6>

                        </td>
                        <td className='tableCell'>
                            <h6>$6250/mo.</h6>
                            <p>
                            Billed Monthly</p>

                        </td>
                        <td className='tableCell'>
                            <h6>$1250/yr | $125/mo. </h6>
                            <p className='text-danger'>
                            Additional Admins
                            <br />
                            $250/yr. | $25/mo.
                            <br />
                            <br />
                            Save when purchased annually.
                            </p>


                        </td>
                    </tr>
                    <tr>
                        <td className='tableCell'>
                        </td>
                        <td className='tableCell'>
                            <button className='btn btn-primary'>Buy Now</button>
                        </td>
                        <td className='tableCell'>
                            <button className='btn btn-primary'>Buy Now</button>
                        </td>
                        <td className='tableCell'>
                            <button className='btn btn-primary'>Buy Now</button>

                        </td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                            Disclosure Portal <br />
                            4 admin users <br />
                            25 public/staff portals <br />

                        </td>
                        <td className='tableCell'></td>
                        <td className='tableCell'></td>
                        <td className='tableCell'>√</td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                        Disclosure Portal <br/>
                        unlimited admin/public<br/>
                         users


                            

                        </td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'>Add $1000/yr
                        $100/mo.  
                        </td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                        Courses Audits*
                        

                        </td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'></td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                        Training Library

                        </td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'></td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                        Project Manager*
                        </td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'></td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                        Compliance**

                        </td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'></td>
                        <td className='tableCell'></td>
                    </tr>
                    <tr>

                        <td className='tableCell'>
                        Front/Back End <br/>
                        Developer***

                        </td>
                        <td className='tableCell'>√</td>
                        <td className='tableCell'></td>
                        <td className='tableCell'></td>
                    </tr>
                </tbody>
            </Table>

        </div>
        <h6>Terms, Polices, and Disclaimers (+)</h6>
        <p>Our services are provided in conjunction with our third-party network FIN Lancer.  We are not an IT/Cybersecurity/Legal firm and strongly suggest working with such experts for ongoing system maintenance, security, access rights, and troubleshooting. We are available to refer your firm to an IT, Cybersecurity, and operations expert in our network for such activities. </p>
        <p>*Our project manager will assist with help client with a concept that may include developing a blueprint, goals, project workflows, design support, and logistical planning only.  </p>
        <p>**Our compliance consultants at FIN Compliance will work with your IT, Compliance, Legal, or Operations team to assist with disclosure and regulatory requirements related to your technology system.  </p>
        <p>***Code (IP rights) or No-Code (non-IP rights) developer referrals are available to help to build and maintain the system. We reserve the right to refuse service for any development projects that are in competition to our existing technology, partners and affiliates.    </p>
        </>

    );
};

export default Pricing;

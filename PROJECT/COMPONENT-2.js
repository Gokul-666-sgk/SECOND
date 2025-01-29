import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./COMPONENT2.css"

function AutoLayoutExample() {
  return (
    <div>
        <Container className='ani'>
            <Row>
                <Col 
                    className='ft'><b>Connect every team, task, and<br/> project together with Jira</b>
                    <form> 
                        <label className='hd'>Work email</label><br/>
                        <input className='fm' type='email' name='a3'></input>
                        <h4>Find teammates, plus keep work and life separate by using your<br/> work email.</h4>
                        <p>
                        <button  type='submit' class="btn btn-primary btn-lg"><b>Sign up</b></button>&nbsp;&nbsp;
                        
                            or&nbsp;
                            <button  type='submit' class="btn btn-lg"><img src = "\img\images (3).jpg" alt = "locataion" width="120" height="50"/></button>&nbsp;
                            <button  type='submit' class="btn btn-lg"><img src = "\img\images (2).jpg" alt = "locataion" width="50" height="50"/></button>
                        </p>
                    </form>
                </Col>
                <Col><img src = "\img\JSW_Boards_en.webp" alt = "locataion" width="580" height="400"/></Col>
            </Row>
        </Container>

            <h1 className='fun'><center><b>Discover the features that make Jira so easy to <br/> use</b></center></h1>
            <center className='bat'>
               <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Boards</Button>
                <Button variant="secondary">Timeline</Button>
                <Button variant="secondary">Reports</Button>
                <Button variant="secondary">Automation</Button>
                </ButtonGroup>
            </center>

        <Container className='ani2'>
            <Row>
                <Col className=''>
                    <h4>Powerful agile boards</h4><br/>
                    <p className='tc'><b>Scrum boards:</b> Scrum boards help agile <br/>teams break large, complex projects into <br/>manageable pieces of work so focused <br/>teams ship faster.</p>
                    <p className='tc'><b>Kanban boards:</b> Agile and DevOps teams <br/>can use flexible kanban boards to visualize <br/>workflows, limit work-in-progress, and <br/>maximize efficiency as a team. Templates <br/>make it easy to get started quickly and <br/>customize as you go.</p>
                    <p className='tc'><b>Choose your own adventure:</b> Jira Software <br/>is flexible enough to mold to your team’s <br/>own unique way of working, whether it is <br/>Scrum, Kanban, or something in between.</p>
                </Col>
                <Col><img src = "\img\time.webp" alt = "locataion" width="780" height="400"/></Col>
            </Row>
        </Container><br/><br/>

        <Container fluid className='ani3'>
            <Row>
                <Col className='ct'><img src = "\img\n2.webp" alt = "locataion" width="540" height="330"/></Col>
                <Col className='ct1'>
                <p className='gs'><b>Start your next project off right</b></p><br/>
                <p className='sg'><b>Structure and align goals across teams, break<br/> work down into manageable tasks, and know who’s working on what.</b></p>
                </Col>
            </Row><br/><br/><br/>

            <Row>
                <Col className='ct'>
                <p className='gs'><b>Manage the big picture down to every detail</b></p><br/>
                <p ><b>Now that work is underway, use Jira to understand the major moving pieces and quickly drill down to the tiniest of details.</b></p>
                </Col>
                <Col className='ts'><img src = "\img\sg.webp" alt = "locataion" width="540" height="330"/></Col>    
            </Row>
        </Container><br/><br/>

        <Container>
            <Row>
                <Col>
                <img src = "\img\a.webp" alt = "locataion" width="530" height="400"/><br/><br/><br/>
                <p className='see'><b>Project boards</b></p>
                <p>Track the status of everyone's tasks at each stage of the workflow. Understand how work is distributed across the team, what’s still in progress, and what to tackle next.</p>

                </Col>
                <Col>
                <img src = "\img\b.webp" alt = "locataion" width="530" height="400"/><br/><br/><br/>
                <p className='see'><b>Task management</b></p>
                <p>Tasks in Jira house the information you need to understand real-time work status, such as development activity and related issue progress. Integrate data from popular apps.</p>
                </Col>
            </Row>
        </Container><br/><br/>

        <Container>
            <Row>
                <Col>
                <img src = "\img\c.webp" alt = "locataion" width="530" height="400"/><br/><br/><br/>
                <p className='see'><b>Dependency management</b></p>
                <p>Jira shows you the order in which work needs to get done so you can spot bottlenecks before they become a blocker.</p>

                </Col>
                <Col>
                <img src = "\img\d.webp" alt = "locataion" width="530" height="400"/><br/><br/><br/>
                <p className='see'><b>Goal tracking</b></p>
                <p>Understand how work is mapping to company goals over time in the summary view. Easily share progress with stakeholders.</p>
                </Col>
            </Row>
        </Container><br/><br/><br/><br/> 

        <Container fluid className='main'>
                <p>Collaborate and launch</p>
                <h1>Connect, collaborate, celebrate</h1>
                <p>Jira better connects teams and work for more seamless collaboration and faster alignment.</p>
        </Container>

        <Container fluid className=''>
            <Row>
                <Col className='at'><img src = "\img\e.webp" alt = "locataion" width="580" height="330"/></Col>
                <Col className='ct1'>
                <p className='gs'><b>Shared release dates</b></p><br/>
                <p className='sg'><b>The only place where teams who make your product are connected to teams who launch it. When dates change, every team is in the know.</b></p>
                </Col>
            </Row>
        </Container><br/><br/>   

        <Container fluid className='ani3'>
            <Row>
                <Col className='ct'><img src = "\img\z.webp" alt = "locataion" width="540" height="330"/></Col>
                <Col className='ct1'>
                <p className='gs'><b>Customize how your team’s work flows</b></p><br/>
                <p className='sg'><b>Set up, clean up, and automate even the most complicated project workflows.</b></p>
                </Col>
            </Row><br/><br/><br/>

            <Row>
                <Col className='ct'>
                <p className='gs'><b>Stay on track – even when the track changes</b></p><br/>
                <p ><b>Use the timeline view to map out the big picture, communicate updates to stakeholders, and ensure your team stays on the same page.</b></p>
                </Col>
                <Col className='ts'><img src = "\img\sun.webp" alt = "locataion" width="540" height="330"/></Col>    
            </Row>

            <Row>
                <Col className='ct'><img src = "\img\y.webp" alt = "locataion" width="540" height="330"/></Col>
                <Col className='ct1'>
                <p className='gs'><b>Bye-bye, spreadsheets</b></p><br/>
                <p className='sg'><b>Keep every detail of a project centralized in real time so up-to-date info can flow freely across people, teams, and tools.</b></p>
                </Col>
            </Row>
        </Container><br/><br/>

        <Container fluid className='win'>
                <p><center>Move fast, stay aligned, and build better - <br/>together</center></p>
                <center><button type="button" class="btn btn-warning">Get it Free</button></center>
        </Container><br/><br/><br/>

        <h3>
            <center>Trusted by over 100,000 customers world-wide<br/>
            <img src = "\img\Spotify_logo.svg" alt = "locataion" width="150" height="90"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src = "\img\Square_Logo.svg" alt = "locataion" width="150" height="90"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src = "\img\ebay_logo.svg" alt = "locataion" width="100" height="70"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src = "\img\Cisco_Logo.svg" alt = "locataion" width="90" height="60"/>
            </center></h3><br/><br/><br/><br/>
    </div>
  )
}
export default AutoLayoutExample;






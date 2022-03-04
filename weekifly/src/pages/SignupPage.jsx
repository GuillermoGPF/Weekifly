import { Col, Container, Row } from 'react-bootstrap'
import Brand from '../components/Brand/Brand'
import Signup from '../components/Signup/Signup'
import { Link } from 'react-router-dom'

const SignupPage = () => {

    return (
        <div className='home'>
            <Container>
                <Row className='flex'>
                    <Col>
                        <Brand></Brand>
                        <div className='avatars'>
                            <div className='avatar'>
                                <img src='./../img/avatar-1.svg'></img>
                            </div>
                            <div className='avatar'>
                                <img src='./../img/avatar-2.svg'></img>
                            </div>
                            <div className='avatar'>
                                <img src='./../img/avatar-3.svg'></img>
                            </div>
                            <div className='avatar'>
                                <img src='./../img/avatar-4.svg'></img>
                            </div>
                            <div className='avatar'>
                                <img src='./../img/avatar-5.svg'></img>
                            </div>
                            <div className='avatar'>
                                <img src='./../img/avatar-6.svg'></img>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Signup />
                        <Link to='/'>Si tienes cuenta, inicia sesión aquí</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignupPage
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AnimateHeight from 'react-animate-height';
import './style.scss'

const VISIBLE_DELAY = 100

class Card extends PureComponent {

    static propTypes = {
        index: PropTypes.number.isRequired,

        id: PropTypes.string,
        type: PropTypes.string, // "Full Time",
        url: PropTypes.string, // "https://jobs.github.com/positions/14dcebe4-49fd-4953-a53b-a999c0d5bfeb",
        created_at: PropTypes.string, // "Thu Jun 20 14:14:32 UTC 2019",
        company: PropTypes.string, // "Noordhoff Uitgevers",
        company_url: PropTypes.string, // "https://www.noordhoffuitgevers.nl/",
        location: PropTypes.string, // "Utrecht / Groningen",
        title: PropTypes.string, // "Software Engineer",
        description: PropTypes.string, // "\u003cp\u003e\u003cem\u003eWanted: Software Engineers for 2 million learners\u003c/em\u003e\u003c/p\u003e\n\u003cp\u003eFor our locations in Utrecht \u0026amp; Groningen we are looking for more than one\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003eSoftware Engineer\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003eFor everyone who discovers. For everyone who grows. For everyone who performs and challenges themselves. For your smallest dreams and your biggest ambitions. Learning will take you further. From your first day at school to the next step in your career. Noordhoff Uitgevers is there for you and everyone who learns.\u003c/p\u003e\n\u003cp\u003eOur digital learning solutions help everyone learn to their full potential. Every day over 2 million people, young and old, work and learn with the learning resources, technology, and services from Noordhoff Uitgevers. We believe that learning can always be improved. That you, and our customers, can get even more out of yourself tomorrow. We also challenge ourselves to look further than today. We continue to innovate. Together with everyone who, just like us, has a heart for learning.\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003eYour future (technical) environment\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003eOur platform consists of a mix of .NET, Node and React + Redux services that run as Web Applications or containers in Kubernetes on Azure. We are moving towards an architecture based on microservices, continuous delivery, and true ownership of the final product. You will work with the modern web and mobile technologies with experienced, multidisciplinary, agile teams.\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003eLearning starts with yourself\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003eLearning and developing takes a central place at Noordhoff. This starts with you as a software engineer and ends with our customers, both students, and teachers. There are weekly Knowledge Sharing meetings and you have plenty of room to continue to develop your skills on a holistic level.\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003eAnd who are you?\u003c/strong\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eYou like to work together with other teams and disciplines.\u003c/li\u003e\n\u003cli\u003eYou work with your team on the basis of the principle: \"you build it, you run it\"\u003c/li\u003e\n\u003cli\u003eYou have the drive to develop high-quality technological solutions.\u003c/li\u003e\n\u003cli\u003eYou are happy to own the entire product development cycle from architecture to development and delivery.\u003c/li\u003e\n\u003cli\u003eYou find it fun and important to share your knowledge.\u003c/li\u003e\n\u003cli\u003eYou are happy to work in a dynamic and agile environment.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cstrong\u003eWhat experience do you have?\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003eYou'll ideally have a degree, preferably in a technical subject; if not you’ll need to have experience with programming outside of your degree.\nExcellent software development knowledge and skills in any of our current languages are a great advantage.  We believe that great engineers can work in any language.\nWe are looking for engineers of every level and are willing to help you grow and learn.\nYou’ve worked in an agile environment or are willing to learn.\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003eWhat do you get from us?\u003c/strong\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eA competitive salary and end-of-year bonus;\u003c/li\u003e\n\u003cli\u003eOwnership of the things you build, support to grow and a clear and structured career path;\u003c/li\u003e\n\u003cli\u003eAttractive and flexible employment conditions including a Personal Budget and an end-of-year bonus;\u003c/li\u003e\n\u003cli\u003eYour working hours? You determine together with your team how, where and when you work. Of course, we support this with technical tools, such as Slack.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cstrong\u003eDo you want to know more?\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003eNoordhoff Uitgevers is part of Infinitas Learning. Visit our website to learn more about Infinitas Learning and your career as a software engineer. You can apply by clicking on the \u003cstrong\u003eapplybutton\u003c/strong\u003e, you only have to leave your CV.\u003c/p\u003e\n\u003cp\u003eWould you prefer to know more about this vacancy first? Then contact one of our recruiters via LinkedIn or Whatsapp.\u003c/p\u003e\n\u003cp\u003eJolandi Schreuder\nWhatsapp: 06-28719027\nLinkedIn: [www.linkedin.com/in/jolandischreuder/]\u003c/p\u003e\n\u003cp\u003eMarjolein Bovens\nWhatsapp: 06-40100320\nLinkedIn: [www.linkedin.com/in/marjoleinbovens/]\u003c/p\u003e\n\u003cp\u003eFor more information you can visit our landing page [https://digital.infinitaslearning.com]\u003c/p\u003e\n\u003cp\u003e\u003cem\u003eAcquisition as a result of this vacancy is not appreciated.\u003c/em\u003e\u003c/p\u003e\n\u003cp\u003e\u003cem\u003eKeywords: Informatica, Technische Informatica, Front-end Developer, Software Developer, Software Engineer, Agile, vacature Groningen, vacature Utrecht\u003c/em\u003e\u003c/p\u003e\n",
        how_to_apply: PropTypes.string, // "\u003cp\u003e\u003ca href=\"https://vacature.onlinevacatures.nl/?vid=131238\"\u003ehttps://vacature.onlinevacatures.nl/?vid=131238\u003c/a\u003e\u003c/p\u003e\n",
        company_logo: PropTypes.string, // https://jobs.github.com ...
    }

    static defaultProps = {
        isRowContent: true
    }

    componentDidMount() {

        this.visibleTimer = setTimeout(() => {
            this.setState({
                isCardVisible: true
            })
        }, VISIBLE_DELAY * this.props.index)
    }

    componentDidUpdate(prevProps) {
        const {isRowContent} = this.props

        if (isRowContent !== prevProps.isRowContent) {
            this.setState({
                isCardVisible: false
            })
            this.visibleTimer = setTimeout(() => {
                this.setState({
                    isCardVisible: true
                })
            }, VISIBLE_DELAY * this.props.index)
        }
    }

    componentWillUnmount() {
        if (this.visibleTimer) clearTimeout(this.visibleTimer)
    }

    visibleTimer = null

    state = {
        isCardVisible: false,
        isDescriptionVisible: false
    }

    getDateColorClassName() {
        switch (this.props.lineColor) {
            case 'red line':
                return 'card__infoBlockLineColor card__infoBlockLineColor_red'

            case 'blue line':
                return 'card__infoBlockLineColor card__infoBlockLineColor_blue'

            default:
                return 'card__infoBlockLineColor card__infoBlockLineColor_green'
        }
    }

    render() {
        const {isRowContent, title, created_at, description, url, index} = this.props
        const {isCardVisible, isDescriptionVisible} = this.state
        const cardClassName = classnames('card',
            {
                card_row: isRowContent,
                card_visible: isCardVisible
            })
        const imageClassName = classnames('card__image', {card__image_row: isRowContent})
        const dateColorClassName = this.getDateColorClassName()

        return (
            <div key={isRowContent + index} className={cardClassName}>
                <img className={imageClassName} src={url} alt="Italian Trulli" />
                <div className="card__infoBlock">
                    <div className="card__infoBlockHeader" >
                        <div className="card__infoBlockTitle"><span>{title}</span> {isRowContent &&
                        <span className={dateColorClassName}>{created_at}</span>}</div>
                        <div onClick={() => this.setState((prevState) => ({isDescriptionVisible: !prevState.isDescriptionVisible}))}>
                            <div>Описание: <span style={{color: 'blue', cursor: 'pointer'}}>{isDescriptionVisible ? 'скрыть' : 'показать'}</span> </div>
                        </div>
                        <AnimateHeight
                            height={isDescriptionVisible ? 'auto' : 0 }
                        >
                            <div className="card__infoBlockDescription" dangerouslySetInnerHTML={{__html: description}} />
                        </AnimateHeight>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card
import './style.scss';
import dim from '../../../assets/images/main/dim.png';
import toir from '../../../assets/images/main/toir.png';
import integration from '../../../assets/images/main/integration.png';
import control from '../../../assets/images/main/control.png';

const Services = () => {
    return <section className='services__section'>
        <div className='services__container container'>
            <div className="services__block">
                <h2 className='services__title'>
                    Unios ДИМ
                </h2>
                <div className='services__description'>
                    Единообразное отображение и анализ данных SCADA-систем предприятия
                </div>
                <img className='services__img' src={dim} alt="" />
            </div>
            <div className="services__block">
                <h2 className='services__title'>
                    Unios ТОиР
                </h2>
                <div className='services__description'>
                    Гибкий автоматизированный бизнес-процесс техобслуживания и ремонта
                </div>
                <img className='services__img' src={toir} alt="" />
            </div>
            <div className="services__block">
                <h2 className='services__title'>
                    UNIOS Интеграция
                </h2>
                <div className='services__description'>
                    Непрерывный обмен документами с системами предприятия
                </div>
                <img className='services__img' src={integration} alt="" />
            </div>
            <div className="services__block">
                <h2 className='services__title'>
                    UNIOS Контроль исполнения
                </h2>
                <div className='services__description'>
                    Оперативная постановка задач и контроль выполнения работ
                </div>
                <img className='services__img' src={control} alt="" />
            </div>
        </div>
    </section>
}

export default Services;
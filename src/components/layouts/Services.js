import Service from '../Service';
import services from '../../assets/servicesList';

function Services() {
    return (
        <div className="services-page">
            {services.map(service=>(
                <Service title={service.title} description={service.description} path={service.path} />
            ))}
        </div>
    )
}

export default Services

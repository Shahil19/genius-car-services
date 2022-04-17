import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'The Rock', img: expert2 },
    { id: 3, name: 'Dwayne Johnson', img: expert3 },
    { id: 4, name: 'Messi Lio', img: expert4 },
    { id: 5, name: 'Chistiano Ronaldo', img: expert5 },
    { id: 6, name: 'Mohammad Salah', img: expert6 },
]
const Experts = () => {

    return (
        <section id='experts' className='container mt-5'>
            <h2 className='text-center mb-3'>Our Experts</h2>
            <div className='row row-cols-1 row-cols-md-3  g-4'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </section>
    );
};

export default Experts;
import React from 'react';
import { employees, EmployeeType } from './CarData';

type EmployeeProps = {
    employee: EmployeeType;
};

const Employee = ({ employee }: EmployeeProps) => {
    const { image, job, name } = employee;

    return (
        <li className="rounded border border-gray-200 text-center shadow-md transition hover:shadow-xl">
            <img src={image} alt="employee image" />
            <div className="px-4 py-8">
                <h2 className="text-xl font-bold">{name}</h2>
                <h3 className="text-lg font-semibold text-gray-500">{job}</h3>
            </div>
        </li>
    );
};

const Team = () => {
    return (
        <section className="mx-auto my-40 max-w-7xl">
            <ul className="grid w-full place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
                {employees.map((item, index) => (
                    <Employee key={index} employee={item} />
                ))}
            </ul>
        </section>
    );
};

export default Team;

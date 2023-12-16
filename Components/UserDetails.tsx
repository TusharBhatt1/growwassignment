import React from 'react';
import Input from './Input';
import Heading from './Heading';

interface UserDetailsProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UserDetails({handleChange }: UserDetailsProps) {
  return (
    <>
    <Heading
    title='User Details'
    />
    <div>
      <Input
        label="Name"
        type="text"
        name="name"
        placeholder="Enter your name"
        required
        onChange={handleChange}
      />
      <Input
        placeholder="Enter your address"
        name="address"
        label="Address"
        type="text"
       
        onChange={handleChange}
      />
      <Input
        name="contact"
        onChange={handleChange}
        placeholder="+91"
        type="tel"
        label="Contact"
      />
    </div>
    </>
  );
}

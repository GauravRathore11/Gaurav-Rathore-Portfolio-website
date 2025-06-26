import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Big Integer Arithmetic",
    description: "Performed addition, subtraction, multiplication, and division of large integers using linked lists to overcome 32/64-bit limitations. Efficient structure design enabled precise high-digit calculations.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["C", "Data Structures", "Linked Lists", "Algorithm Optimization"],
    link: "https://github.com/GauravRathore11/BigInteger-Calculator-Using-Linked_List",
    github: "https://github.com/GauravRathore11/BigInteger-Calculator-Using-Linked_List"
  },
  {
    id: 2,
    title: "Decentralized Voting React App",
    description: "A DApp built with React and Web3JS for transparent and immutable voting. Includes vote casting, candidate management, and result visualization with MetaMask integration.",
    image: "https://images.pexels.com/photos/6209277/pexels-photo-6209277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Solidity", "ReactJS", "Web3JS", "MetaMask", "Smart Contracts", "TailwindCSS", "Vite"],
    link: "https://d-voting-system.vercel.app/",
    github: "https://github.com/GauravRathore11/D-voting-system"
  },
  {
    id: 3,
    title: "Corevault - Secure CLI for File Management",
    description: "system calls-based command line interface to manage files — encrypt, decrypt, create, delete, move, copy, rename and other operations with directory structure awareness.",
    image: "https://images.pexels.com/photos/5380641/pexels-photo-5380641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["C language", "File I/O", "CLI", "OS Module"],
    link: "https://github.com/GauravRathore11/CoreVault",
    github: "https://github.com/GauravRathore11/CoreVault"
  }
];

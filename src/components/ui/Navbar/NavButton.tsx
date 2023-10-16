import './NavButton.css';

interface NavButtonProps {
    label: string;
  }
  

export function NavButton({ label }: NavButtonProps) {
    return (
      <div className='navButton'>{label}</div>
    );
}
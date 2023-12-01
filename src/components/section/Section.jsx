import css from './style.module.css'
import PropTypes from 'prop-types';


const Section = ({title, children}) => {
    return ( 
        <>
            <div className={css.title}>{title}</div>
            <div className={css.titleChildren}>{children}</div>
        
        </>
     );
}
 
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
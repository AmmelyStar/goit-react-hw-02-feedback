import css from './style.module.css'


const Statistics = ({good, neutral, bad, total, percent}) => {
    return ( 
        <div className={css.statistics}>
            <div className={css.btnStatistic}>
                <li className={css.list}>Good: {good}</li>
                <li className={css.list}>Neutral: {neutral}</li>
                <li className={css.list}>Bad: {bad}</li>
            </div>
                        
            <div className={css.totalStatistics}>
                <li className={css.list}>Total: {total}</li>
                <li className={css.list}>Positive Feedback: {percent}%</li>
            </div >
        </div>
            
       

     );
}
 
export default Statistics;
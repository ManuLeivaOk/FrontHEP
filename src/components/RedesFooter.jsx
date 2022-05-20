import insta from '../assets/images/logoInstagramFooter.png';
import Linkedin from '../assets/images/logoLndFooter.png';
import spo from '../assets/images/logoSpoFooter.png';
import you from '../assets/images/logoYoutubeFooter.png'

const RedesFooter = () => { 
  return (
    <div className='flex justify-around opacity-80'>
        <a href='https://www.google.com/search?q=icono+svg+spotify&rlz=1C5CHFA_enAR972AR972&sxsrf=APq-WBuKMq2FQM__j_v4uUMh_iuwrNpFbw:1645990374551&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjok9D8z6D2AhV5LLkGHVqpBgUQ_AUoAXoECAEQAw&biw=1440&bih=707&dpr=2#imgrc=EZatpLlBNrYyxM'><img src={spo} alt='' className='w-25 my-4'/></a>      
        <a href='https://www.google.com/search?q=icono+svg+spotify&rlz=1C5CHFA_enAR972AR972&sxsrf=APq-WBuKMq2FQM__j_v4uUMh_iuwrNpFbw:1645990374551&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjok9D8z6D2AhV5LLkGHVqpBgUQ_AUoAXoECAEQAw&biw=1440&bih=707&dpr=2#imgrc=EZatpLlBNrYyxM'><img src={insta} alt='' className='w-25 my-4'/></a>    
        <a href='https://www.google.com/search?q=icono+svg+spotify&rlz=1C5CHFA_enAR972AR972&sxsrf=APq-WBuKMq2FQM__j_v4uUMh_iuwrNpFbw:1645990374551&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjok9D8z6D2AhV5LLkGHVqpBgUQ_AUoAXoECAEQAw&biw=1440&bih=707&dpr=2#imgrc=EZatpLlBNrYyxM'><img src={you} alt='' className='w-25 my-4'/></a>
        <a href='https://www.google.com/search?q=icono+svg+spotify&rlz=1C5CHFA_enAR972AR972&sxsrf=APq-WBuKMq2FQM__j_v4uUMh_iuwrNpFbw:1645990374551&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjok9D8z6D2AhV5LLkGHVqpBgUQ_AUoAXoECAEQAw&biw=1440&bih=707&dpr=2#imgrc=EZatpLlBNrYyxM'><img src={Linkedin} alt='' className='w-25 my-4'/></a>
    </div>
  )
}

export default RedesFooter

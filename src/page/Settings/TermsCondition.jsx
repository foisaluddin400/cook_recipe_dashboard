import  { useState, useRef, useEffect, } from 'react';
import JoditEditor from 'jodit-react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import  Navigate  from '../../Navigate';
import { useAddTermsMutation, useGetTermsQuery } from '../redux/api/settingApi';
import { message } from 'antd';


const TermsCondition = () => {
const{data:terms} = useGetTermsQuery();
const[addTerms] = useAddTermsMutation()

  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [isLoading, setLoading] = useState(false)

  const handleTerms = async () => {
    const data = {
      description: content,
     
    };
   
    setLoading(true);
    const res = await addTerms(data).unwrap();
    setLoading(false);

    message.success(res?.message);
  };

  const config = {
      readonly: false,
      placeholder: 'Start typings...',
      style: {
          height: 600,
      },
      buttons: [
          'image', 'fontsize', 'bold', 'italic', 'underline', '|',
          'font', 'brush',
          'align'
      ]
  }

  useEffect(() => {
    setContent(terms?.data?.description);
  }, [terms]);

  return (
    <div className="p-1 ">
      <Navigate title={'Terms & Condition'}></Navigate>

      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={newContent => setContent(newContent)}
        onChange={newContent => { }}
      />
      

      <div className="mt-5 flex justify-center">
        <button
       onClick={handleTerms}
       loading={isLoading}
          className="bg-[#02111E] py-2 px-4 rounded text-white"
        >
          Save & change
        </button>
      </div>
    </div>
  );
};

export default TermsCondition;

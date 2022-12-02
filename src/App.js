import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

// function App() {

// 일반 변수 : 새로고침해야 렌더
// useState : 값이 변경되면 자동으로 렌더

  // let num = 1;

  // function numUp(){
  //   num = num + 1;
  //   console.log(num);
  // }                   button onClick={() => {numUp()}} 사용  클릭해도 콘솔에서만 num이 증가, 화면상에서는 그대로 1출력
  // <button onClick={() => {setNum(num = num + 1)}}>버튼</button> 으로 사용시 버튼 클릭시 화면의 num 증가

  // setTimeout(()=>{setNum(num = num + 1)}, 1000)   // 1초마다 num이 1씩 증가


  // const [num, setNum] = useState(0);

  // const [numList, setNumList] = useState([]);

  // function numRecording(){
  //   setNumList([...numList, num]);    // numList 배열 뒤에 num 추가

  //   setNum(0);          // 숫자 저장되면 0으로 초기화
  // }

  // return (
  //   <div className="App">
  //     <div>현재 숫자 : {num}</div>
  //     <button onClick={() => {setNum(num + 1)}}>숫자증가</button>
  //     <button onClick={() => {setNum(num - 1)}}>숫자감소</button>
  //     <button onClick={(numRecording)}>숫자 기록</button>
  //     <h1>저장된 숫자</h1>
  //     <ul>
  //       {numList.map((num) =>(
  //         <li>{num}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
// }



// const RecordForm = ({numList, setNumList}) => {

//   const [num, setNum] = useState(0);

//   return (
//   <div>
//     <div>현재 숫자 : {num}</div>
//     <button onClick={() => setNum(num + 1)}>숫자 증가</button>
//     <button onClick={() => setNum(num - 1)}>숫자 감소</button>
//     <button onClick={() => setNum(0)}>초기화</button>
//     <hr/>
//     <button onClick={() => setNumList([...numList, num])}>숫자 기록</button>
//     <button onClick={() => setNumList([])}>기록 초기화</button>
//   </div>
//   )
// }

// const RecordList = ({numList}) => {
//   return (
//   <div>
//     <h2>기록된 숫자</h2>
//     {numList.length > 0 ? 
//     <div>
//       <ul>
//         {numList.map((num) =>(
//           <li>{num}</li>
//         ))}
//       </ul>
//     </div> : 
//     <div>기록 없음</div>}
//   </div>
//   )
// }

// const App = () => {

//   const [numList, setNumList] = useState([]);   // 여기서 선언해야 RecordForm, RecordList 두 곳에서 사용 가능

//   return (
//     <div style={{margin: "40px auto", 
//                  width : "800px",
//                  textAlign : "center"}}>
//       <RecordForm numList={numList} setNumList={setNumList}/>
//       <RecordList numList={numList}/>
//     </div>
//   )
// }


// const App = () => {

//   const [text, setText] = useState("")

//   return (
//     <div>
//       <input type="text"
//       value={text}
//       onChange={(e) => {
//         // console.log(e.target.value);    // input 창에 입력시 보이진 않지만 console에서 확인하면 입력되는 것 확인 가능
//         setText(e.target.value);        // input 창에서 입력 내용 나타남
//       }}
//       />
//       <button>수정</button>
//     </div>
//   );
// }



// const App = () => {

//   const [text, setText] = useState("")
//   const [edit, setEdit] = useState("false")

//   let content = <div>
//     {text}<button onClick={() => setEdit(true)}>수정</button>
//   </div>

//   if(edit) {
//     content = <div>
//       <input type="text"
//       value={text}
//       onChange={(e) => {
//         setText(e.target.value);
//       }}
//     />
//     <button onClick={() => setEdit(false)}>수정</button>
//     </div>
//   }

//   return (
//     <>
//       {content}
//     </>
//   );
// }


const App = () => {

  const [photos, setPhotos] = useState([]);

  // useEffect(async () => {
  // try{
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
  //     setPhotos(response.data);
  // } catch(error){
  //     console.log(error)
  // }
  // })

  useEffect(() => {
    // axios({
    //   method:'GET',
    //   url:'https://jsonplaceholder.typicode.com/photos'               // https://jsonplaceholder.typicode.com/
    // }).then(response => setPhotos(response.data))

    axios.get('https://jsonplaceholder.typicode.com/photos')
         .then(response => setPhotos(response.data))                    // axios({method, url}).then() 과 같음
  })



  return (
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <div>{photo.title}</div>
            <div><img src={photo.thumbnailUrl}/></div>
          </li>
        ))}
      </ul>
    )
}


export default App;

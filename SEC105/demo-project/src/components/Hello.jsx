
function Hello(props) {
    return (
      /*  <div>
            <h1> Roll No : {student.rollno}</h1>
            <h1> Student Name : {student.sname}</h1>
            <h1> Email : {student.email}</h1>
            <h1> Mobile No :  {student.mobile}</h1>
        </div> */
        <>
            <h1>Name : {props.name}</h1>
            <h1>Email : {props.email}</h1>
        </>
    )
}

export default Hello
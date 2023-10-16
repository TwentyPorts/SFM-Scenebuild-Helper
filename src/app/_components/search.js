export default function search() {
    return (
        <div>
            <p className="">
            Enter search term
            </p>
            <input type="text" id="lname" name="lname"></input>
        </div>
    );
}

export async function getServerSideProps(ctx){


    return {
        props:{
            data:null
        }
    }
}
import myPhoto from '../assets/my-photo.jpg';

function MyPhoto() {
   return (
      <div>
         <img src={myPhoto} className="h-36 w-36 object-cover rounded-full" />
      </div>
   );
}

export default MyPhoto;

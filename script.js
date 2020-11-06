$(document).ready(function(){
    
    $('#find_movie').click(function(){
        getMovieInfo();
    });
  });


  function getMovieInfo(){
    var apiKey = 'f1ad043e';
    var movieName = $('#movie_name').val();
    var apiUrl = "https://www.omdbapi.com/?apikey="+apiKey;

    if(movieName===''||movieName===undefined){
        swal("Enter Movie Name!");
        return false;
    }else{
        $.ajax({
            type:'GET',
            url:apiUrl+"&t="+movieName,
            success:function(data){
                if(data.Poster === "N/A"){
                    $('#movie_image').attr('src',"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6");
                }else{
                    $('#movie_image').attr('src',data.Poster);
                }
                $('#movie_title').text(data.Title);
                $('#movie_director').text(data.Director);
                $('#movie_genre').text(data.Genre);
                $('#movie_language').text(data.Language);
                $('#movie_rating').text(data.imdbRating);
                $('#movie_release').text(data.Released);
                $('#movieModal').modal('toggle');
            },error:function(error){
                console.log('Error during API call',error);
            }
        })
    
        $('#movieModal').on('hidden.bs.modal', function () {
            location.reload();
        });
    }
  }



// variables
let currentPhoto = 0;
let photoNumber = 0;

//main array - database
let imagesData = [
    {
        photo: './img/Notorius Bounty Hunters_resize.jpg',
        thumbnail: './img/thumbnail/Notorius Bounty Hunters_tn.jpg',
        title: 'Notorius Bounty Hunters',
        descripion: 'The most feared warriors and hunters of the galaxy!'
    },
    {
        photo: './img/Clones of the Empire_rezise.jpg',
        thumbnail: './img/thumbnail/Clones of the Empire_tn.jpg',
        title: 'Clones of the Empire',
        descripion: 'Created to protect and defend the Republic.'
    },
    {
        photo: './img/Utility Droids.jpg',
        thumbnail: './img/thumbnail/Utility Droids_tn.jpg',
        title: 'Utility Droids',
        descripion: 'If you would like to go somewhere through space, you will need one.'
    },
    {
        photo: './img/TIE Fighter.jpg',
        thumbnail: './img/thumbnail/TIE Fighter_tn.jpg',
        title: 'TIE Fighter',
        descripion: 'When you hear one, you will already know... trouble is ahead!'
    },
    {
        photo: './img/X-wing.jpg',
        thumbnail: './img/thumbnail/X-wing_tn.jpg',
        title: 'X-wing',
        descripion: 'Functional and effective - one of it have dealt with the Death Star 1.'
    },
    {
        photo: './img/Weaopon of the Jedii.jpg',
        thumbnail: './img/thumbnail/Weaopon of the Jedii_tn.jpg',
        title: 'Weaopon of the Jedii',
        descripion: 'Use it with care, it is far more than a weapon!'
    },
    {
        photo: './img/Lord Vader_resize.jpg',
        thumbnail: './img/thumbnail/Lord Vader_tn.jpg',
        title: 'Lord Vader',
        descripion: 'Fear and power incarnate!'
    },
    {
        photo: './img/Millenium Falcon.jpg',
        thumbnail: './img/thumbnail/Millenium Falcon_tn.jpg',
        title: 'Millenium Falcon',
        descripion: 'The fastest frigatte in the galaxy!'
    },
]

$().ready( () => {
    $(`[data-number=${0}]`).toggleClass('active');

})

//load the proper image, with the proper tittle and text
let loadPhoto = (photoNumber) => {
    $('#photo').attr('src',imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].descripion);
    
    $('.all-thumbnail-container div').removeClass('active');
    $(`.small-thumbnail-container[data-number=${photoNumber}]`).addClass('active');
};

loadPhoto(currentPhoto);

//previous and next buttons
$('.left').click(() => {
    if(currentPhoto > 0) {
    currentPhoto--;
    } else{
        currentPhoto = 7;
    }
    loadPhoto(currentPhoto);
  })

  $('.right').click(() => {
    if(currentPhoto < 7) {
        currentPhoto++;
    } else{
        currentPhoto = 0;
    }
    
    loadPhoto(currentPhoto);   
    
  })  

// create thumbnails + thumbnail handler
//-origina idea

/*$(imagesData).each( function(photoNumber) {
    $('.all-thumbnail-container').append(
        `
        <div class="small-thumbnail-container" data-number="${photoNumber}">
            <img id="" src="${imagesData[photoNumber].photo}" alt="" data-number="${photoNumber}">
        </div>
        `
    );
    
});*/

//-got some help (working)
imagesData.forEach( (element, index) => {
    $('.all-thumbnail-container').append(
        `
        <div class="small-thumbnail-container" data-number=${index}>
            <img id="" src="${element.thumbnail}" alt="${element.title}" data-number=${index}>
            <div class="thumbnail-title">${element.title}</div>
        </div>
        `
    );
    
});





$('.small-thumbnail-container').click((event) => {
    let indexClicked = $(event.target).parent().attr('data-number');
    let numberIndex = parseInt(indexClicked);
    photoNumber = numberIndex;
    loadPhoto(photoNumber);
    
});




/*$('.right').on( 'click', () => {
        $(`[data-number]=${currentPhoto}`).toggleClass('active');
        $(`[data-number]=${currentPhoto-1}`).toggleClass('active');
    });
console.log(`[data-number]=${photoNumber}`)*/
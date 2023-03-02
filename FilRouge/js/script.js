/*----------------début-navbar-Verticale--------------------*/

$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
        $('#tog').toggleClass('return');
    });
});
/*----------------fin-navbar-Verticale--------------------*/

/*----------------fin-book--------------------*/
/*----------------début-bubble--------------------*/
document.addEventListener('DOMContentLoaded', function() {

        var bpop = {
            // As the name says, it starts on init
            init: function() {
                //Render the dom for the app
                this.renderDom()
                    //Cache the dom elements
                this.cacheDom()
                    //Bind the event listeners
                this.bindListeners()
                    //The app is not active by default
                this.itIsActived = false
            },
            displayContainer: function() {
                // Open the bubble
                this.itIsOpen = true
                    // Animate the bubble
                this.$draggable.style.transition = 'left 0.2s ease, top 0.2s ease, transform 0.2s ease'
                this.$draggable.style.right = '5px'
                this.$draggable.style.top = '5px'
                    // Add the background fade
                this.$mainContentParent.appendChild(this.$bgFade)
                    // Animate the bubble
                setTimeout(function() {
                        bpop.$draggable.style.transition = 'transform 0.2s ease'
                        bpop.$mainContentWrapper.classList.remove('minimized')
                        bpop.itIsActived = true
                    }, 200)
                    //  Animate the background fade     
                this.$fadeBg = this.$mainContentParent.querySelector('.bubble_default__bg')
                this.$fadeBg.style.opacity = '1'
            },
            // This is the drag handler for the drag-and-drop feature.
            // It is called when the user drags an element.
            // The element is dragged by changing its position.
            dragg: function(e) {

                // if the user is dragging the icon
                if (this.draggActives) {
                    // get the x and y coordinates of the mouse
                    this.x = e.clientX
                    this.y = e.clientY

                    // change the position of the draggable icon
                    this.$draggable.style.left = (this.x - 35) + 'px'
                    this.$draggable.style.top = (this.y - 35) + 'px'
                        // minimize the main content wrapper
                    this.$mainContentWrapper.classList.add('minimized')
                }
            },
            //   This function is called whenever the mouse button is pressed and the
            //   mouse is moved over the object.
            draggOn: function(e) {
                this.draggActives = true // Set this to true so that the drag function knows that it has to handle the mousemove event
                this.initialStaticalClientX = e.clientX // Save the current x coordinate of the mouse
                this.initialStaticalClientY = e.clientY // Save the current y coordinate of the mouse
                window.addEventListener('mousemove', bpop.dragg.bind(this)) // Add an event listener to the window, for the mousemove event, and bind the drag function to the current instance of the boxpop class, so that it can use its properties.
            },
            // This function is used to disable dragging of elements.
            disableDragg: function(e) {
                // Set the draggActives to false so that the mousemove event won't trigger again
                this.draggActives = false

                // Record the final statical clientX and clientY
                this.finalStaticalClientX = e.clientX
                this.finalStaticalClientY = e.clientY

                // Simulate a click event
                this.simulatedClick()
            },
            // Set aside the current window for later use.
            setAside: function() {
                // If the pointer is on the left half of the screen, the widget
                // will be positioned at the left edge.
                if (this.finalStaticalClientX < (window.innerWidth / 2)) {
                    this.$draggable.style.left = '-3px'
                } else {
                    // Otherwise, the widget will be positioned at the right edge.
                    this.$draggable.style.left = 'calc(100% - 67px)'
                }

                // Disable the draggable element
                this.itIsActived = false

                //  Set the transition property of the draggable element to change the left property of the element
                this.$draggable.style.transition = 'left 0.2s ease, transform 0.2s ease'

                //  After 200 ms, set the transition property of the draggable element to change the transform property of the element
                setTimeout(function() {
                    bpop.$draggable.style.transition = 'transform 0.2s ease'
                }, 200)
            },
            setAsideFromDefault: function() {
                this.$draggable.style.right = '5px' // Set the right edge of the draggable element to 5 pixels
                this.$draggable.style.top = '20px' // Set the top edge of the draggable element to 20 pixels
                this.$mainContentWrapper.classList.add('minimized') // Add the class "minimized" to the main content wrapper
                this.itIsActived = false // Set the "itIsActived" property to false
                this.$fadeBg.style.opacity = '0' // Set the opacity of the fade background to 0
                setTimeout(function() {
                    bpop.$fadeBg.parentElement.removeChild(bpop.$fadeBg) // Remove the fade background after 200 milliseconds
                }, 200)
            },
            // This code simulates a click on the element with id 'id'

            simulatedClick: function() {

                // If the user hasn't moved the mouse, then the popup should open and close
                if (this.initialStaticalClientX == this.finalStaticalClientX && this.initialStaticalClientY == this.finalStaticalClientY) {
                    // If the popup is open, then close it
                    if (this.itIsActived) {
                        this.setAsideFromDefault()
                            // If the popup is closed, then open it
                    } else {
                        this.displayContainer()
                    }
                } else {
                    // If the user has moved the mouse, then the popup should open and stay open
                    if (this.itIsActived) {
                        this.$fadeBg.style.opacity = '0'
                        setTimeout(function() {
                            bpop.$fadeBg.parentElement.removeChild(bpop.$fadeBg)
                        }, 200)
                    }

                    this.setAside()
                }
            },
            // This function binds the listeners that will be used to
            // react to events.
            bindListeners: function() {
                this.$bubbleBody.addEventListener('mousedown', this.draggOn.bind(this))
                this.$bubbleBody.addEventListener('mouseup', this.disableDragg.bind(this))
                this.$bgFade.addEventListener('click', this.setAsideFromDefault.bind(this))
            },
            // this function renders the DOM for a page
            renderDom: function() {
                // create a new div element 
                this.$bubbleBody = document.createElement('div')
                    // add a class name to the div element 
                this.$bubbleBody.classList.add('bubble_default__bubble')
                    // add an id to the div element 
                this.$bubbleBody.setAttribute('id', 'floatingBubble')

                // create a new div element 
                this.$bubbleBodyContent = document.createElement('div')
                    // add a class name to the div element 
                this.$bubbleBodyContent.classList.add('minimized')
                this.$bubbleBodyContent.classList.add('bubble_default__content')

                // create a new div element 
                this.$bubbleBodyContentInternal = document.createElement('div')
                    // add a class name to the div element 
                this.$bubbleBodyContentInternal.classList.add('bubble_default__internal')
                    // append the new div element to the previous div element 
                this.$bubbleBodyContent.appendChild(this.$bubbleBodyContentInternal)
                this.$bubbleBodyContentInternal.innerHTML =
                    `<div class="bubble_default__header">
                    <div class="bubble_default__title">
                        Votre Profil
                    </div>
                </div>
                <div class="bubble_default__body">
                    <div class="bubble_default__body__content__image">
                        <img src="img/Ilmatoumy_Deadman_Wonderland_2.png" alt="Avatar">
                    </div>
                    <div class="bubble_default__body__content__texte">
                        <ul>
                            <li class="bubble_default__body__content__texte__item"> Nom Prenom </li>
                            <li class="bubble_default__body__content__texte__item"> Email </li>
                            <li class="bubble_default__body__content__texte__item"> Téléphone </li>
                            <li class="bubble_default__body__content__texte__item"> préferences </li>
                        </ul>
                    </div>
                </div>
                <div class="bubble_default__footer">
                    <div class="bubble_default__title">
                        Ma gallerie
                    </div>
                        <div class="tabs">
                            <input hidden type="radio" name="tab-css" id="tab-1" checked />
                            <label class="tab-control" for="tab-1">Vos Créations</label>
                                <input hidden type="radio" name="tab-css" id="tab-2" />
                            <label class="tab-control" for="tab-2">Vos favoris</label>

                            <div class="tab-content">
                            <div id="tab-panel-1" class="tab-panel">
                            
                                <div class="searchbar">
                                    <input type="text" placeholder="Search...">
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </div>
                                <div class="tab-panel__content">
                                <div class="tab-panel__content__item">
                                    <img src="img/bookc.png" alt="book1">
                                </div>
                                <div class="tab-panel__content__item">
                                    <img src="img/book2.png" alt="Avatar">
                                </div>
                                <div class="tab-panel__content__item">
                                    <img src="img/book3.png" alt="Avatar">
                                </div>
                                <div class="tab-panel__content__item">
                                    <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y" alt="Avatar">
                                </div>
                                <div class="tab-panel__content__item">
                                    <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y" alt="Avatar">
                                </div>
                                <div class="tab-panel__content__item">
                                    <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y" alt="Avatar">
                                </div>
                              </div>
                            </div>
                            <div id="tab-panel-2" class="tab-panel">
                                <div class="searchbar">
                                    <input type="text" placeholder="Search...">
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </div>
                                <div class="tab-panel__content">
                                <div class="tab-panel__content__item">
                                    <img src="https://imgs.search.brave.com/D0Dvg8kJZw9l18g_CmG28fTkMnZTuEFXgAxFMjPcmo0/rs:fit:423:430:1/g:ce/aHR0cDovL3d3dy5z/aW5nYXBvcmVkcnVt/c2hvcC5jb20vdXBs/b2Fkcy82LzIvOC80/LzYyODQyNzQ3L3Bk/cC1sb2dvLWRpYW1v/bmRfb3JpZy5wbmc" alt="Avatar">
                                </div>
                                <div class="tab-panel__content__item">
                                    <img src="https://imgs.search.brave.com/D0Dvg8kJZw9l18g_CmG28fTkMnZTuEFXgAxFMjPcmo0/rs:fit:423:430:1/g:ce/aHR0cDovL3d3dy5z/aW5nYXBvcmVkcnVt/c2hvcC5jb20vdXBs/b2Fkcy82LzIvOC80/LzYyODQyNzQ3L3Bk/cC1sb2dvLWRpYW1v/bmRfb3JpZy5wbmc" alt="Avatar">
                                </div>
                                <div class="tab-panel__content__item">
                                    <img src="https://imgs.search.brave.com/D0Dvg8kJZw9l18g_CmG28fTkMnZTuEFXgAxFMjPcmo0/rs:fit:423:430:1/g:ce/aHR0cDovL3d3dy5z/aW5nYXBvcmVkcnVt/c2hvcC5jb20vdXBs/b2Fkcy82LzIvOC80/LzYyODQyNzQ3L3Bk/cC1sb2dvLWRpYW1v/bmRfb3JpZy5wbmc" alt="Avatar">
                                </div>
                                <div class="tab-panel__content__item">
                                    <img src="https://imgs.search.brave.com/D0Dvg8kJZw9l18g_CmG28fTkMnZTuEFXgAxFMjPcmo0/rs:fit:423:430:1/g:ce/aHR0cDovL3d3dy5z/aW5nYXBvcmVkcnVt/c2hvcC5jb20vdXBs/b2Fkcy82LzIvOC80/LzYyODQyNzQ3L3Bk/cC1sb2dvLWRpYW1v/bmRfb3JpZy5wbmc" alt="Avatar">
                                </div>
                                <div class="tab-panel__content__item">
                                    <img src="https://imgs.search.brave.com/D0Dvg8kJZw9l18g_CmG28fTkMnZTuEFXgAxFMjPcmo0/rs:fit:423:430:1/g:ce/aHR0cDovL3d3dy5z/aW5nYXBvcmVkcnVt/c2hvcC5jb20vdXBs/b2Fkcy82LzIvOC80/LzYyODQyNzQ3L3Bk/cC1sb2dvLWRpYW1v/bmRfb3JpZy5wbmc" alt="Avatar">
                                </div>
                                <div class="tab-panel__content__item">
                                    <img src="https://imgs.search.brave.com/D0Dvg8kJZw9l18g_CmG28fTkMnZTuEFXgAxFMjPcmo0/rs:fit:423:430:1/g:ce/aHR0cDovL3d3dy5z/aW5nYXBvcmVkcnVt/c2hvcC5jb20vdXBs/b2Fkcy82LzIvOC80/LzYyODQyNzQ3L3Bk/cC1sb2dvLWRpYW1v/bmRfb3JpZy5wbmc" alt="Avatar">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `


                this.$bubbleBodyParent = document.createElement('section') // Create a new HTML element of type section
                this.$bubbleBodyParent.setAttribute('id', 'floatingBubbleContainer') // Set the ID of the new element to floatingBubbleContainer


                this.$bubbleBodyParent.appendChild(this.$bubbleBody) // Add the bubble body to the new section
                this.$bubbleBodyParent.appendChild(this.$bubbleBodyContent) // Add the bubble body content to the new section

                document.querySelector('body').appendChild(this.$bubbleBodyParent) // Add the new section to the body of the page

                this.$bgFade = document.createElement('span') // Create a new HTML element of type span
                this.$bgFade.classList.add('bubble_default__bg') // Add the class bubble_default__bg to the span
            },
            // Function that caches the DOM elements that are used in the code
            cacheDom: function() {
                this.$mainContentParent = document.querySelector('#floatingBubbleContainer')
                this.$mainContentWrapper = this.$mainContentParent.querySelector('.bubble_default__content')
                this.$draggable = this.$mainContentParent.querySelector('.bubble_default__bubble')
            }

        }

        bpop.init()
    })
    /*------------------errors------------------*/
function closePopup() {
    // 1. Get the jQuery object for the popup
    let popup = $('#error_container');
    // 2. Set the popup's display property to none
    popup.css('display', 'none');
}
/*------------------file-display------------------*/
const fileInput = document.getElementById("formFileMultiple");
const imageList = document.getElementById("imageList");

fileInput.addEventListener("change", function() {
    // Supprime tous les éléments enfants de la div imageList.
    while (imageList.firstChild) {
        imageList.removeChild(imageList.firstChild);
    }

    // Obtient une liste des fichiers sélectionnés.
    const files = fileInput.files;

    // Vérifie qu'aucun plus de deux fichiers n'ont été sélectionnés.
    if (files.length > 2) {
        alert("Vous ne pouvez sélectionner que deux fichiers maximum.");

        // Supprime automatiquement tous les fichiers excédentaires.
        while (files.length > 2) {
            files.pop();
        }

        // Réinitialise la valeur du champ de fichier avec la liste de fichiers filtrée.
        fileInput.value = "";
        return;
    }

    // Affiche l'image de chaque fichier sélectionné dans la div imageList.
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Vérifie que le fichier sélectionné est une image.
        if (!file.type.startsWith("image/")) {
            alert("Veuillez sélectionner uniquement des fichiers image.");
            fileInput.value = "";
            return;
        }

        // Crée une URL d'objet blob pour l'image.
        const imageUrl = URL.createObjectURL(file);

        // Crée un élément image pour afficher l'image.
        const image = document.createElement("img");
        image.classList.add("obj_img");
        image.src = imageUrl;
        imageList.appendChild(image);

    }
});
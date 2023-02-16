<div class="content_user">
    <ul>
        <li>
        <?= $user->nom . ' ' . $user->prenom ?> 
            <button type="button" class="close font__size-18" data-dismiss="alert" onclick="closePopup()">
                <span aria-hidden="true">
                    <i class="fa fa-times danger "></i>
                </span>
                <span class="sr-only">Close</span>
            </button>
        </li>
    </ul>
</div>
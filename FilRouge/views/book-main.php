<div id="wrapper">
    <div id="container">

        <section class="open-book">
            <header>
                <h1><?=$book -> title?></h1>
                <h6><?=$book -> author ?></h6>
            </header>
            <div class="articles">
                <article>
                    <h2 class="chapter-title"><?=$book -> chapterTitle?></h2>
                    <p class="text-page-chapter">
                        <?=$book -> chapterContent?>
                    </p>
                    
                </article>
                <article>
                    <!-- page 2 -->
                    <p class="text-page">
                       
                    </p>
                </article>
            </div>
            <footer>
                <ol id="page-numbers">
                    <li><?=$book -> pages-1 ?></li>
                    <li><?=$book -> pages+1 ?></li>
                </ol>
            </footer>
        </section>

    </div>
</div>

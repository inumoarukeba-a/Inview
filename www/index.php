<?php
  require_once substr($_SERVER['SCRIPT_FILENAME'], 0, -strlen($_SERVER['SCRIPT_NAME'])).'/asset/include/init.php';

  $description = '';
  $keywords = '';
  $fbimage = '';
  $title = '';
  $pankuzu = array(
    'トップページ' => '/'
  );
?>
<?php include 'header.php'; ?>

<main class="main" role="main">
  <!-- Test
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
  <?php for($i = 0; $i < 4; $i++):?>
  <section class="test -inview animation<?php echo $i ?>">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae consequuntur corrupti voluptate nobis, expedita quod placeat at inventore iusto excepturi explicabo. Autem, quisquam dolorem eum quod id est perferendis tempore.
      Exercitationem mollitia minus consequatur pariatur porro aliquam, debitis reprehenderit, labore sapiente quia et in sunt autem sequi a. Provident inventore iure laudantium odit ducimus iusto dolore distinctio quaerat unde aut.
      Neque sit quas iure fugit laboriosam iusto accusamus pariatur autem illo fuga, officiis tempora aliquid tempore perspiciatis fugiat, saepe nemo rerum! Doloribus, labore. Libero laudantium rem repellendus ratione quos molestias?
      Porro quod voluptate harum tenetur cum tempora aut ex, placeat ipsam accusamus adipisci dicta sed voluptatibus, autem natus. Eum cumque officiis explicabo accusantium ab cum incidunt voluptatum optio omnis aliquam.
      Dicta, repellendus quasi voluptas reprehenderit doloribus excepturi! Voluptate sint architecto fuga officiis doloribus at voluptas ipsum rerum id doloremque, unde nostrum vero consequuntur! Voluptates nulla nobis cumque, debitis libero exercitationem?
    </p>
  </section>
  <?php endfor;?>
</main>

<?php include 'footer.php'; ?>

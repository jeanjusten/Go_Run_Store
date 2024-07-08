$(document).ready(function(){
    // Dropdown menu - Mobile display
    $(".botao-menu button").click(function(){
        $(".menu").slideToggle();
    })

    // Dropdown menu - "Ver mais" ou "Ver menos"
    $("#botao-veja-mais").click(function(){
        if ($("#botao-veja-mais").text() == "VER MAIS") {
            $("#botao-veja-mais").text("VER MENOS");
        } else {
            $("#botao-veja-mais").text("VER MAIS");
        };
        $(".container-produtos2").slideToggle();
    })

    // Plugin de validação de Formulário JQuery Validate
    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            mensagem: {
                required: true,
            },
        },
        messages: {
            nome: "Insira seu nome",
            telefone: "Insira um telefone válido",
            email: "Insira um e-mail válido",
            mensagem: "Digite uma mensagem",
        },
        submitHandler: function(form) {
            // Plugin JQuery UI - Mensagem Pop-Up Sucesso
            $( function() {
                $("#caixa-dialogo-sucesso").dialog({
                    resizable: false,
                    height: "auto",
                    width: 400,
                    modal: true,
                    buttons: {
                    Fechar: function() {
                        $(this).dialog("close");
                        $("#nome").val("");
                        $("#telefone").val("");
                        $("#email").val("");
                        $("#mensagem").val("");
                    }}
                });
            });
        },
        invalidHandler: function(evento, validador) { // Lida com formulários incompletos ou inválidos
            let campos_incorretos = `Número de campos inválidos: ${validador.numberOfInvalids()}`;

            if (campos_incorretos) {
                // Plugin JQuery UI - Mensagem Pop-Up Formulário inválido
                $( function() {
                    $("#caixa-dialogo-erro").dialog({
                        resizable: false,
                        height: "auto",
                        width: 400,
                        modal: true,
                        buttons: {
                        Fechar: function() {
                            $(this).dialog("close");}}
                    });
                });
            }
        }
    })

    // Plugin de máscara de validação JQuery
    $("#telefone").mask("(00) 00000-0000", {
        placeholder: "(00) 00000-0000"
    }) 

    // Slick Caroussel
    $("#imagens-carrossel").slick({
        autoplay: false,
        arrows: false,
        dots: true,
        swipe: true,
        infinite: true,
        appendDots: $("#imagens-carrossel"),
    })

    // Hover do Mouse no botão do carrinho - vários slides
    $("#botao-carrinho").hover(function() {
        $("#botao-carrinho").css(
        "background-color",
        "#000",
        )
    });

    $("#botao-carrinho").on("mouseleave", function() {
        $("#botao-carrinho").css(
        "background-color",
        "rgb(139, 111, 218)",
        );
    });

    // Troca a cor de background do site conforme a cor do tênis em display
    $("#imagens-carrossel").on('afterChange', function(event, slick, currentSlide){
        let slideAtual = $(slick.$slides.get(currentSlide));

        if ($(slideAtual).attr("id") == "slick-slide01") {
            $("#body").css(
            "background-image", 
            "linear-gradient(to bottom, #FB2C62, #E392D7)",
            ),
            $("#botao-carrinho").css(
            "background-color",
            "#f57591",
            ),

            $("#botao-carrinho").on("mouseleave", function() {
                $("#botao-carrinho").css(
                "background-color",
                "#f57591",
                );
            });
        }
        
        else if ($(slideAtual).attr("id") == "slick-slide02") {
            $("#body").css(
            "background-image", 
            "linear-gradient(to bottom, #E18EA0, #FD7C2F)"
            ),
            $("#botao-carrinho").css(
            "background-color",
            "#fa8484",
            );

            $("#botao-carrinho").on("mouseleave", function() {
                $("#botao-carrinho").css(
                "background-color",
                "#fa8484",
                )
            });
        }

        else if ($(slideAtual).attr("id") == "slick-slide03") {
            $("#body").css(
            "background-image", 
            "linear-gradient(to bottom, #4C8238, #C7B049)"
            ),
            $("#botao-carrinho").css(
            "background-color",
            "#8ea318",
            );

            $("#botao-carrinho").on("mouseleave", function() {
                $("#botao-carrinho").css(
                "background-color",
                "#8ea318",
                )
            });
        }

        else if ($(slideAtual).attr("id") == "slick-slide04") {
            $("#body").css(
            "background-image", 
            "linear-gradient(to bottom, #0099A7, #4AC68B)"
            ),
            $("#botao-carrinho").css(
            "background-color",
            "#0b7c86",
            );

            $("#botao-carrinho").on("mouseleave", function() {
                $("#botao-carrinho").css(
                "background-color",
                "#0b7c86",
                )
            });
        }

        if ($(slideAtual).attr("id") == "slick-slide00") {
            $("#body").css(
            "background-image", 
            "linear-gradient(to bottom, #5620B3, #96A9E5)"
            ),
            $("#botao-carrinho").css(
            "background-color",
            "rgb(139, 111, 218)",
            );

            $("#botao-carrinho").on("mouseleave", function() {
                $("#botao-carrinho").css(
                "background-color",
                "rgb(139, 111, 218)",
                )
            });
        }
    });

    // Itens com Animação de SlideIn Esquerda-Direita
    $(window).scroll(function () {
        animacaoSlideEsquerda($(this), [
            $("#loja"),
            $(".container-contato"),
        ]);
    });
    // Itens com Animação de SlideIn Direita-Esquerda
    $(window).scroll(function () {
        animacaoSlideDireita($(this), [
            $("#div-sobre"),
            $("#contato-img"),
        ]);
    });
    // Itens com Animação de SlideIn Cima-Baixo
    $(window).scroll(function () {
        animacaoSlideCima($(this), [
            $(".icones"),
            $(".div-produtos"),
        ]);
    });
})

// Animação de SlideIn nas Seções
$.getDocHeight = function(){
    return Math.max(
        $(document).height(),
        $(window).height(),
        document.documentElement.clientHeight
    );
};

$.getScrollPercentage = function(){
    return 100 * Math.min(
        ($(window).height() + $(window).scrollTop()) / $.getDocHeight(),
        $(window).scrollTop()
    );
};

// Animação de SlideIn da Esquerda p/ Direita Scroll Mouse
let animacaoSlideEsquerda = function(t, items) {
    
    for (var i = 0; i < items.length; i++) {
        if((( $.getDocHeight() - $(window).height()) - ( $.getDocHeight() - items[i].offset().top )) <= t.scrollTop()) {
            if(!items[i].hasClass("slide-esquerda")){
                items[i].addClass("slide-esquerda");
            }
        } else { items[i].removeClass("slide-esquerda"); }
    }
};

// Animação de SlideIn da Esquerda p/ Direita ao carregar a página
$("#titulo").animate({ 
    left:"10px",
    opacity:"1",
});


$("#imagens-carrossel").animate({ 
    right: "0px",
});

// Animação de SlideIn da direita p/ Esquerda Scroll Mouse
let animacaoSlideDireita = function(t, items) {
    
    for (var i = 0; i < items.length; i++) {
        if((( $.getDocHeight() - $(window).height()) - ( $.getDocHeight() - items[i].offset().top )) <= t.scrollTop()) {
            if(!items[i].hasClass("slide-direita")){
                items[i].addClass("slide-direita");
            }
        } else { items[i].removeClass("slide-direita"); }
    }
};

// Animação de SlideIn de Cima para Baixo Scroll Mouse
let animacaoSlideCima = function(t, items) {
    
    for (var i = 0; i < items.length; i++) {
        if((( $.getDocHeight() - $(window).height()) - ( $.getDocHeight() - items[i].offset().top )) <= t.scrollTop()) {
            if(!items[i].hasClass("slide-cima")){
                items[i].addClass("slide-cima");
            }
        } else { items[i].removeClass("slide-cima"); }
    }
};

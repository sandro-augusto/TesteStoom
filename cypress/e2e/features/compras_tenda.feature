Feature: Processo de compra de produto

Background:
    Given que o usuario esta logado

Scenario: Adicionar produtos ao carrinho
    When o usuario adiciona 1 produto Tenda no carrinho
    And o usuario adiciona 1 produto seller no carrinho
    Then o carrinho deve conter ambos os produtos

# Cenario: Adicionar 2 produtos com quantidades específicas ao carrinho
#     Quando adiciona um produto Tenda no carrinho
#     E o usuario adiciona 3 unidades do produto seller no carrinho
#     Entao o carrinho deve conter ambos os produtos com as quantidades especificadas

# Cenario: Tentar adicionar um produto indisponivel ao carrinho
#     Quando o usuario seleciona o produto Tenda
#     E o produto Tenda nao esta disponivel no estoque
#     Entao o usuario nao deve ser capaz de adicionar o produto ao carrinho
#     E uma mensagem de erro informando a indisponibilidade deve ser exibida
    
# Cenario: Adicionar unidades dos produtos no carrinho com sucesso
#     E possui produtos no carrinho
#     Quando o usuario clicar em adicionar unidades do produto
#     Entao a quantidade do produto deve ser alterada
#     E o sistema exibira a quantidade atualizada

# Cenario: Adicionar unidades zerada
#     Dado que o usuario esta logado
#     E possui produtos no carrinho
#     Quando o usuario clicar em adicionar a unidade zero do produto
#     Entao a quantidade do produto deve ser alterada
#     E o sistema exibira a quantidade zerada

# Cenario: Adicionar unidades superiores a quantidade disponivel no estoque
#     Dado que o usuario esta logado
#     E possui produtos no carrinho
#     Quando o usuario clicar em adicionar a unidade acima da quantidade disponivel no estoque
#     Entao sistema exibira a mensagem apropriada

# Cenario: Remover unidades de Produtos com Sucesso
#     Dado que o usuario esta no carrinho de compras
#     E o carrinho contem um produto Tenda com 3 unidades
#     Quando o usuario seleciona a opcao para remover 2 unidades do produto do carrinho
#     Entao o produto Tenda deve ter 1 unidade restante no carrinho
#     E o total no carrinho deve ser ajustado corretamente

# Cenario: Tentar remover mais unidades do que existentes no carrinho
#     Dado que o usuario esta no carrinho de compras
#     E o carrinho contem o produto seller com 2 unidades
#     Quando o usuario tenta remover 3 unidades do produto do carrinho
#     Entao uma mensagem de aviso deve ser exibida informando que nao ha unidades suficientes para remover
#     E o total no carrinho permanece inalterado

# Cenario:  Remover todas as unidades de um produto do carrinho
#     Dado que o usuario esta no carrinho de compras
#     E o carrinho contem o produto Tenda com 4 unidades
#     Quando o usuario seleciona a opcao para remover todas as unidades do produto do carrinho
#     Entao o produto Tenda não deve estar mais no carrinho
#     E o total no carrinho deve ser ajustado corretamente

# Cenario: Finalizar a compra com sucesso via boleto bancário
#     Dado que o usuario esta no carrinho de compras
#     E o carrinho contem os produtos desejados
#     Quando o usuario escolhe a opcao de pagamento com boleto
#     E fornece as informacoes necessarias para geracao do boleto e confirma a compra
#     Entao o boleto deve ser gerado
#     E o carrinho deve ficar vazio

# Cenario: Finalizar a compra com sucesso via cartao
#     Dado que o usuario esta no carrinho de compras
#     E o carrinho contém os produtos desejados
#     Quando o usuario escolhe a opcao de pagamento com cartao
#     E fornece um numero de cartao valido e outras informacoes necessarias
#     E confirma a compra
#     Entao o usuario deve receber uma confirmacao da compra
#     E o carrinho deve ficar vazio

# Cenario: Tentar finalizar a compra com boleto sem produtos no carrinho
#     Dado que o usuario esta no carrinho de compras
#     E o carrinho esta vazio
#     Quando o usuario escolhe a opcao de pagamento com boleto e tenta finalizar a compra
#     Entao uma mensagem de aviso deve ser exibida informando que o carrinho esta vazio
#     E o usuario não deve ser capaz de prosseguir com a finalizacao"

# Cenario: Tentar finalizar a compra com cartao invalido
#     Dado que o usuario esta no carrinho de compras
#     E o carrinho contem os produtos desejados
#     Quando o usuario escolhe a opcao de pagamento com cartao
#     E fornece um numero de cartao invalido e tenta finalizar a compra
#     Entao uma mensagem de erro deve ser exibida informando que o cartao e invalido
#     E o usuario não deve ser capaz de concluir a compra
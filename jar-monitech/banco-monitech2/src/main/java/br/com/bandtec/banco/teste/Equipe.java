package br.com.bandtec.banco.teste;

public class Equipe {

    private Integer id;
    private String nome;
    private String area;
    private String cor;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    @Override
    public String toString() {
        return "Equipe{" + "id=" + id + ", nome=" + nome + ", area=" + area + ", cor=" + cor + '}';
    }

}

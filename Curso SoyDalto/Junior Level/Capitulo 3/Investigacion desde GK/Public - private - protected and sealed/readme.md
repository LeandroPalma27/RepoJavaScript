## Diferencias entre public, private, protected y sealed:

- Public: Son aquellas cosas que son visibles para todo tipo de ambitos.

- Private: Son aquellas cosas que son visibles pero solo para la clase en donde pertenecen ().

- Protected: Son aquellas cosas que son visibles para las clases a la que pertenecen y para sus subclases (clases heredadas).

- Sealed: Son aquellas clases que estan selladas ( en c# son las clases predefinidas por el sdk), estas pueden usarse para heredar o importar, pero no para modificarlas, hacer que hereden algo, etc.
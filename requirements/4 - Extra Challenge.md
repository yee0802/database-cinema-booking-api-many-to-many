# Extra Challenge

Congratulations! You've created an *implicit* many-to-many and added an API for it. With implicit many-to-many's, we don't need to think about how Prisma connects them under the hood.

There is another way to implement many-to-many relationships in Prisma: *explicit*. By *explicitly* defining a many-to-many, we need to manually define the join table in our schema.

[Explicit many-to-many relationships](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/many-to-many-relations#explicit-many-to-many-relations)

- Using the documentation in the link provided above, change your implicit many-to-many into an explicit many-to-many.
- Update the Prisma queries in your controller functions to be compatible with an explicit many-to-many.
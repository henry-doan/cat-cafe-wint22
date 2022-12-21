Cat.delete_all
User.delete_all

@counter = 1
5.times do
  user = User.create(
    first_name: Faker::Games::SuperMario.character,
    last_name: Faker::Games::SuperMario.location,
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    email: "test#{@counter}@test.com",
    password: 'password'
  )
  @counter += 1

  5.times do
    Cat.create(
      name: Faker::Creature::Cat.name,
      breed: Faker::Creature::Cat.breed,
      registry: Faker::Creature::Cat.registry,
      dob: Faker::Date.between(from: '2012-01-01', to: '2022-12-20'),
      avatar: Faker::Avatar.image(slug: "cat", size: "100x400", format: "png", set: "set4"),
      user_id: user.id
    )
  end
end

puts "#{Cat.all.count} cats"
puts "#{User.all.count} users"
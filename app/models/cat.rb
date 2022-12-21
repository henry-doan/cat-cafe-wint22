class Cat < ApplicationRecord
  belongs_to :user

  validates :name, :avatar, presence: true
end

FactoryGirl.define do
  factory :reviewing_group do
    sequence(:name) { |n| "Group # #{n}" }

    factory :reviewing_group_with_users do
      users {[FactoryGirl.create(:user)]}
    end

  end

end

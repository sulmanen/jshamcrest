new TestRunner({
    name: 'Object matchers',

    setup: function() { with(this) {
    }},

    teardown: function() { with(this) {
    }},

    testHasMember: function() { with(this) {
        var hasMember = JsHamcrest.Matchers.hasMember;
        assert(hasMember('length').matches([]));
        assert(hasMember('matches').matches(hasMember()));
        assert(!hasMember('somethingElse').matches([]));
        assert(!hasMember('somethingElse').matches(null));
    }},

    testHasFunction: function() { with(this) {
        var hasFunction = JsHamcrest.Matchers.hasFunction;
        assert(hasFunction('matches').matches(hasMember()));
        assert(!hasFunction('length').matches([]));
        assert(!hasFunction('somethingElse').matches(null));
    }},

    testInstanceOf: function() { with(this) {
        var instanceOf = JsHamcrest.Matchers.instanceOf;
        assert(instanceOf(Array).matches([]));
        assert(instanceOf(Object).matches([]));
        assert(!instanceOf(Function).matches([]));
    }}
}, {'logger':testLogger, 'testLog': 'objectLog'});
describe('Deep Thought', function() {
	module.sharedInjector();

	beforeAll(module('UltimateQuestion'));

	beforeAll(inject(function(DeepThought) {
		expect(DeepThought.answer).toBeUndefined();
		DeepThought.generateAnswer();
	}));

	it('has calculated the answer correctly', inject(function(DeepThought) {
		// Because of sharedInjector, we have access to the instance of the DeepThought service
		// that was provided to the beforeAll() hook. Therefore we can test the generated answer
		expect(DeepThought.answer).toBe(42);
	}));

	it('has calculated the answer within the expected time', inject(function(
		DeepThought
	) {
		expect(DeepThought.runTimeMillennia).toBeLessThan(8000);
	}));

	it('has double checked the answer', inject(function(DeepThought) {
		expect(DeepThought.absolutelySureItIsTheRightAnswer).toBe(true);
	}));
});
